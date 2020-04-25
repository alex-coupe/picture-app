import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import {Image} from './Interfaces';

function App() {

  const [images, setImages] = useState<Array<Image>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=16214614-d337e912e3eb61581ddb881a1&q=${searchTerm}&image_type=photo&pretty=true`)
    .then( res => res.json())
    .then(data => {
      setImages(data.hits);
      setLoading(false);
      })
    .catch(err => console.log(err)) 
  }, [searchTerm]);

  return (


    <div className="App">
      {!loading && images.map( image => {
        return (
          <ImageCard key={image.id} webformatURL={image.webformatURL} tags={image.tags} />
        )
      })
     
      }
    </div>
  );
}

export default App;
