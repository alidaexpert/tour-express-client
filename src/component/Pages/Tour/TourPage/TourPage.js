import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';
import Offer from '../../Home/Offer/Offer';
import Loader from "react-loader-spinner";
import TourPackage from '../../TourPackage/TourPackage';


const TourPage = () => {
    
    const [offers,setOffers]=useState([])
    const [page,setPage]=useState(0)
    const [pageCount,setPageCount]=useState(0)
    const size=6;
    useEffect(()=>{
        fetch(`https://tour-express.herokuapp.com/offers?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setOffers(data.offer)
            const count=data.count
            const pagination=Math.ceil(count/size)
            setPageCount(pagination)
        }
        
        )
    },[page,size])
    const {isLoading}=useAuth()
    if(isLoading===true){
     return <div className="flex justify-center p-36 items-center">
              <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
          </div>
    }
    return (
        <div>
           <div className="lg:p-16 md:p-8 p-8">
           <h4 className="text-xl text-pink-500 font-medium my-2">Choose Your Package</h4>
            <h1 className="text-4xl text-blue-900 font-medium">Select Your Best Package <br /> For Your Travel</h1>
           </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-8">
                {
                    offers.map(offer=><TourPackage pageCount={pageCount} setPage={setPage} key={offer._id} offer={offer}></TourPackage>)
                }

</div>
<div className="">
{
    [...Array(pageCount).keys()].map(number=>
    <button
    key={number}
    className={number===page?"bg-blue-900 text-white border-2 border-blue-400 py-2 px-4 m-2":"border-2 py-2 px-4 m-2"}
    onClick={()=>setPage(number)}
    >
{number+1}
    </button>
    )
}
</div>
        </div>
    );
};

export default TourPage;