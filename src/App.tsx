import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import {Image} from './Interfaces';
import './main.css';

function App() {

  const [images, setImages] = useState<Array<Image>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchTerm}&image_type=photo&pretty=true`)
    .then( res => res.json())
    .then(data => {
      setImages(data.hits);
      setLoading(false);
      })
    .catch(err => console.log(err)) 
  }, [searchTerm]);

  return (


    <div className="App container">
      {!loading && images.map( image => {
        return (
          <ImageCard key={image.id} id={image.id} webformatURL={image.webformatURL} tags={image.tags} 
          views={image.views} downloads={image.downloads} favorites={image.favorites} likes={image.likes}
          comments={image.comments} user={image.user}   />
        )
      })
     
      }
    </div>
  );
}

export default App;
