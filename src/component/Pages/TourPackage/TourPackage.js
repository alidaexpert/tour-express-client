import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

const TourPackage = ({offer}) => {
    const {title,photo,price,tourType,duration,peopleRating}=offer
    console.log(offer)
    const calenderFont=<FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
    const locationFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const starFont=<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
    const history=useHistory()
    const handleClicked=id=>{
history.push(`/offers/${id}`)
    }
    return (
        <div className="hover:bg-gray-200 transition-colors shadow-xl">
          <div className="overflow-hidden">
<img className="hover:scale-x-110 hover:scale-y-110 transition-transform transform " src={photo} alt="" />
          </div>
          <div className="p-4">
            <div className="flex justify-between my-4 ">
              <h3 className="font-medium text-indigo-900"><span className="text-xl">${price}</span>/person</h3>
              <p className="text-blue-900"><span className="text-lg">{calenderFont}</span> {duration} </p>
            </div>
          <h2 className="text-2xl font-medium text-red-400 my-4 text-left"><span className="text-gray-600">{locationFont}</span> {title} </h2>
          <div className="flex justify-between my-4">
          <p className="text-blue-900 text-sm font-medium">Type:{tourType}</p>
          <p className="text-green-900 font-semibold text-sm"><span className="text-yellow-500">{starFont}</span> {peopleRating}people</p>
          </div>
          <button onClick={()=>handleClicked(offer._id)} className="text-white bg-blue-900 rounded-sm w-full py-3 px-8">Book Now</button>
          </div>
        </div>
    );
};

export default TourPackage;