import { useEffect, useState } from 'react';
import Header from './Header';
import Loading from './Loading';
import ImagePage from './ImagePage';

function App() {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=u71Jk7NxmlHqS1XYpPNEHBP0KlqVHqg8qiaWsHpd&count=100")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImages(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      {loading ? <Loading/> : <ImagePage images={images}/>}
    </div>
  );
}

export default App;
