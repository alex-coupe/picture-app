import React from 'react';

interface Image {
    
    pageURL: string;
    tags: string;

}

const ImageCard : React.FC<Image> = ({pageURL,tags}) => {
    
    return (
        <div>
            <img src={pageURL} alt="caption" />
        </div>
    )
}

export default ImageCard;