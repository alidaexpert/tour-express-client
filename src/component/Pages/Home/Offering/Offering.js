import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';


const Offering = () => {
    const [offers,setOffers]=useState([])
    useEffect(()=>{
        fetch("https://tour-express.herokuapp.com/offers")
        .then(res=>res.json())
        .then(data=>setOffers(data.offer))
    },[])
    return (
        <div>
           <div className="lg:p-16 md:p-8 p-8">
           <h4 className="text-xl text-pink-500 font-medium my-2">Choose Your Package</h4>
            <h1 className="text-4xl text-blue-900 font-medium">Select Your Best Package <br /> For Your Travel</h1>
           </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-8">
                {
                    offers.map(offer=><Offer key={offer._id} offer={offer}></Offer>).slice(0,6)
                }

</div>
        </div>
    );
};

export default Offering;