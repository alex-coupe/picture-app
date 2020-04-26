import React from 'react';
import {Image} from '../Interfaces';
import { faCamera, faHeart, faComments, faStar, faDownload, faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageCard : React.FC<Image> = ({webformatURL,tags, user, likes, comments, favorites, downloads, views}) => {
    
    const splitTags:string[] = tags.split(', ');

    return (
        <div className="card">
            <img src={webformatURL} alt="caption" className="column-image" />
            <div>
                <span className="mr-2 text-left"><FontAwesomeIcon size="2x" icon={faCamera} /> <span className="text-primary"><b>{user}</b></span></span>
               
                    <span className="mr-2"><FontAwesomeIcon size="2x" icon={faDownload} /> <span className="text-primary"><b>{downloads}</b></span></span>
                    <span className="mr-2"><FontAwesomeIcon size="2x" icon={faBinoculars} /> <span className="text-primary"><b>{views}</b></span></span>
                
                <div className="mt-1">
                    <span className="mr-2"><FontAwesomeIcon size="2x" icon={faHeart} /> <span className="text-primary"><b>{likes}</b></span></span>
                    <span className="mr-2"><FontAwesomeIcon size="2x" icon={faComments} /> <span className="text-primary"><b>{comments}</b></span></span>
                    <span className="mr-2"><FontAwesomeIcon size="2x" icon={faStar} /> <span className="text-primary"><b>{favorites}</b></span></span>
                </div>
                <div className="mt-2 mb-1">
                {splitTags.map( (tag, index) => {
                    return (
                        <span className="badge" key={index}>#{tag}</span>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default ImageCard;