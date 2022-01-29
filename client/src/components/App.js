import { useEffect, useState } from 'react';
import Header from './Header';
import Loading from './Loading';
import ImagePage from './ImagePage';


function App() {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);

  // Commenting this out and using the below exampleData while the APOD server is down! To be commented back in later.
  // useEffect(() => {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=u71Jk7NxmlHqS1XYpPNEHBP0KlqVHqg8qiaWsHpd&count=100")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setImages(data)
  //     setLoading(false)
  //   })
  // }, [])

  // This is only for use right now while this NASA API server is down, so that I can have some data to work with! Saved from the last successful fetch.
  let exampleData = [
    {
      "date": "2009-05-20",
      "explanation": "What is that astronaut doing?  Fixing the Hubble Space Telescope. During the fourth servicing mission to upgrade and fix Hubble, astronaut Michael Good can be seen attached to the shuttle's robotic arm, working in an open panel of Hubble. Far below, the terminator between day and night can be seen across planet Earth. Since Hubble was captured by the space shuttle Atlantis last Wednesday, five long space-walks have been used to fix and upgrade the aging telescope.  One of the more ambitious orbital missions yet taken, the toiling astronauts have upgraded the Wide Field Camera, fixed the Advanced Camera for Surveys, repaired the Space Telescope Imaging Spectrograph, and replaced COSTAR with the Cosmic Origins Spectrograph. Numerous other general repairs included replacing batteries, gyroscopic sensors, and insulation panels. Hubble will now undergo testing as Atlantis prepares to return to Earth later this week.   digg_url = 'http://apod.nasa.gov/apod/ap090520.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0905/hubble_sts125_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Above Earth, Fixing Hubble",
      "url": "https://apod.nasa.gov/apod/image/0905/hubble_sts125.jpg"
    },
    {
      "date": "2009-08-13",
      "explanation": "What is this strange rock on Mars? Sitting on a smooth plane, the rock stands out for its isolation, odd shape, large size and unusual texture. The rock was discovered by the robotic Opportunity rover rolling across Mars late last month.  Pictured, Opportunity prepares to inspect the unusual rock. After being X-rayed, poked, and chemically analyzed, the rock has now been identified by Opportunity as a fallen meteorite. Now dubbed Block Island, the meteorite has been measured to be about 2/3 of a meter across and is now known to be composed mostly of nickel and iron.  This is the second meteorite found by a martian rover, and so far the largest.  Vast smooth spaces on Mars and Earth can make large meteorites stand out. Opportunity continues its trip across Meridiani Planum on Mars and is on schedule to reach expansive Endeavour Crater next year.   digg_url = 'http://apod.nasa.gov/apod/ap090813.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0908/blockmars_opportunity_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Block Island Meteorite on Mars",
      "url": "https://apod.nasa.gov/apod/image/0908/blockmars_opportunity.jpg"
    },
    {
      "copyright": "Robert H. McNaught",
      "date": "2009-12-06",
      "explanation": "Comet McNaught, the Great Comet of 2007, was the brightest comet of the last 40 years.  Its spectacular tail spread across the sky and was breathtaking to behold from dark locations for many Southern Hemisphere observers.  The head of the comet remained quite bright and was easily visible to even city observers without any optical aide.  Part of the spectacular tail was visible just above the horizon after sunset for many northern observers as well.  Comet C/2006 P1 (McNaught), which reached an estimated peak brightness of magnitude -6 (minus six), was caught by the comet's discoverer in the above image soon after sunset in 2007 January from Siding Spring Observatory in Australia. The robotic Ulysses spacecraft fortuitously flew through Comet McNaught's tail and found, unexpectedly, that the speed of the solar wind dropped significantly.   digg_url = 'http://apod.nasa.gov/apod/ap091206.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0912/comet_mcnaught_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Magnificent Tail of Comet McNaught",
      "url": "https://apod.nasa.gov/apod/image/0912/comet_mcnaught.jpg"
    },
    {
      "copyright": "Robert H. McNaught",
      "date": "2009-12-06",
      "explanation": "Comet McNaught, the Great Comet of 2007, was the brightest comet of the last 40 years.  Its spectacular tail spread across the sky and was breathtaking to behold from dark locations for many Southern Hemisphere observers.  The head of the comet remained quite bright and was easily visible to even city observers without any optical aide.  Part of the spectacular tail was visible just above the horizon after sunset for many northern observers as well.  Comet C/2006 P1 (McNaught), which reached an estimated peak brightness of magnitude -6 (minus six), was caught by the comet's discoverer in the above image soon after sunset in 2007 January from Siding Spring Observatory in Australia. The robotic Ulysses spacecraft fortuitously flew through Comet McNaught's tail and found, unexpectedly, that the speed of the solar wind dropped significantly.   digg_url = 'http://apod.nasa.gov/apod/ap091206.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0912/comet_mcnaught_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Magnificent Tail of Comet McNaught",
      "url": "https://apod.nasa.gov/apod/image/0912/comet_mcnaught.jpg"
    },
    {
      "copyright": "Murray Schukar",
      "date": "2016-04-09",
      "explanation": "Taken on March 20 from the top of Haleakala on the isle of Maui, planet Earth, the first sunrise of northern spring is pictured in this vacation snapshot. The telephoto view from the volcanic caldera above a sea of clouds also captures an elusive green flash near the Sun's upper limb. Atmospheric layers with sharp temperature changes cause the colorful flash as the Sun rises behind a distant cloud bank. Refraction along sight lines through the layers creates multiple distorted images of the Sun, and for a moment, can visibly deflect shorter wavelength green light.",
      "hdurl": "https://apod.nasa.gov/apod/image/1604/MRS_6459schukar2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Green Flash of Spring",
      "url": "https://apod.nasa.gov/apod/image/1604/MRS_6459schukar1024.jpg"
    },
    {
      "copyright": "Stéphane VetterNuits sacrées",
      "date": "2014-09-23",
      "explanation": "That's no sunset. And that thin red line just above it -- that's not a sun pillar. The red glow on the horizon originates from a volcanic eruption, and the red line is the eruption's reflection from fluttering atmospheric ice crystals. This unusual volcanic light pillar was captured over Iceland earlier this month. The featured scene looks north from J�kuls�rl�n toward the erupting volcano B�r�arbunga in the Holuhraun lava field. Even the foreground sky is picturesque, with textured grey clouds in the lower atmosphere, shimmering green aurora in the upper atmosphere, and bright stars far in the distance. Although the last eruption from Holuhraun was in 1797, the present volcanic activity continues.   APOD Wall Calendar: Land and Skyscapes",
      "hdurl": "https://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_1400.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Aurora and Volcanic Light Pillar",
      "url": "https://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg"
    }
  ]

  useEffect(() => {
    setImages(exampleData)
    setLoading(false)
  }, [])




  return (
    <div className="App">
      <Header/>
      {loading ? <Loading/> : <ImagePage images={images}/>}
    </div>
  );
}

export default App;
