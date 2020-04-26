import React from 'react';
import {Image} from '../Interfaces';
import { faCamera, faHeart, faComments, faStar, faDownload, faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageCard : React.FC<Image> = ({webformatURL,tags, user, likes, comments, favorites, downloads, views}) => {
    
    const splitTags:string[] = tags.split(',');

    return (
        <div className="card">
            <img src={webformatURL} alt="caption" className="column-image" />
            <div className="m-3">
                <span className="mr-2 text-primary"><FontAwesomeIcon size="2x" icon={faCamera} /> {user}</span>
                <span className="mr-2"><FontAwesomeIcon size="2x" icon={faDownload} /> {downloads}</span>
                <span className="mr-2"><FontAwesomeIcon size="2x" icon={faBinoculars} /> {views}</span>
                <span className="mr-2"><FontAwesomeIcon size="2x" icon={faHeart} /> {likes}</span>
                <span className="mr-2"><FontAwesomeIcon size="2x" icon={faComments} /> {comments}</span>
                <span className="mr-2"><FontAwesomeIcon size="2x" icon={faStar} /> {favorites}</span>
                {splitTags.map( (tag, index) => {
                    return (
                        <span className="badge" key={index}>{tag}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageCard;