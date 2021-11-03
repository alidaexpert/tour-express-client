import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GalleryPhoto = ({pic}) => {
    const {image,location,caption}=pic
    const locationFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>

    return (
<div className="w-full relative overflow-hidden opacity-90 transition-opacity hover:opacity-100">
    <img src={image} className="w-full h-full" alt="" />
    <div className="text-white text-left absolute top-3/4 p-4  bg-black bg-opacity-40">
        <h2 className="text-yellow-500 text-2xl font-bold">{caption}</h2>
        <p><span className="text-red-600">{locationFont}</span> {location}</p>
    </div>
</div>
    );
};

export default GalleryPhoto;