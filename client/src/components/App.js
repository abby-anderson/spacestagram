import { useEffect, useState } from 'react';
import Header from './Header';
import ImagePage from './ImagePage';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=u71Jk7NxmlHqS1XYpPNEHBP0KlqVHqg8qiaWsHpd&count=100")
    .then(response => response.json())
    .then(data => setImages(data))
  }, [])

  if (!!images) {
    console.log(images)
  }


  return (
    <div className="App">
      <Header/>
      <ImagePage images={images}/>
    </div>
  );
}

export default App;
