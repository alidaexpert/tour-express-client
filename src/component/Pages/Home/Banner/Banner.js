import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-carousel-minimal';

const Banner = () => {
    const data = [
        {
          image: "https://i.ibb.co/JFsDr8W/banner1.jpg",
          caption: "Amazing Tour <br> In San Francisco"
        },
        {
          image: "https://i.ibb.co/K7q3CZc/banner2.jpg",
          caption: "Amazing Tour <br> In Scotland "
        },
        {
          image: "https://i.ibb.co/R6Fvfjn/banner3.jpg",
          caption: "Amazing Tour <br> In  Spain"
        },
        {
          image: "https://i.ibb.co/pvXxzWg/banner4.jpg",
          caption: "Amazing Tour <br> In Darjeeling"
        },
      ];
      const captionStyle = {
        fontSize: '5em',
        fontWeight: '',
        // backgroundImage:"linear-gradient(45deg,rgb(0,0,0,0.5),rgb(5,5,5,0.2))",
        // height:"100%"
      }
    //   const slideNumberStyle = {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    //   }
   
    return (
        <div>
            <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0"
        }}>
          <Carousel
            data={data}
            time={4000}
            width="100%"
            height="600px"
            captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            // pauseIconSize="40px"
            // slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "600px",
            //   margin: "40px auto",
            }}
          />
        </div>
      </div>
        </div>
    );
};

export default Banner;