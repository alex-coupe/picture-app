import React from 'react';
import {Image} from '../Interfaces';


const ImageCard : React.FC<Image> = ({webformatURL,tags}) => {
    
    return (
        <div>
            <img src={webformatURL} alt="caption" />
        </div>
    )
}

export default ImageCard;