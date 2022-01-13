import { useEffect, useState } from 'react';
import Header from './Header';
import ImagePage from './ImagePage';

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=u71Jk7NxmlHqS1XYpPNEHBP0KlqVHqg8qiaWsHpd")
    .then(response => response.json())
    .then(data => setImage(data))
  }, [])

  if (!!image) {
    console.log(image)
  }


  return (
    <div className="App">
      <h1>App.js here</h1>
      <Header/>
      <ImagePage image={image}/>
    </div>
  );
}

export default App;
