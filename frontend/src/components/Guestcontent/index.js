import React, { useState, useEffect } from 'react';
import './Guestcontent.css';
import Searchbar from "../Searchbar"
import Features from '../Features'


function Guestcontent() {
    
    const images = [
      "https://s3-media0.fl.yelpcdn.com/bphoto/EzNDh4YuvNrJfmPYEpPZzQ/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/GlKvkU1p1yobucmCsVRNCQ/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/VFw3j-VVOk6y7m5UOm6Z_A/o.jpg",
    ];

    const images2 = [
      "https://s3-media0.fl.yelpcdn.com/bphoto/ZDPBBGPRgUVy-p3OZ5xvGw/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/7stN1dMvgFGMArFotlYTUw/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/yDSqKCUg39uV-hnMaBnsow/o.jpg",
    ];

    const images3 = [
      "https://s3-media0.fl.yelpcdn.com/bphoto/nN1ObCAO1w2q_UYP-gHbeg/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/MbIf3Rud3ypqOiVcn_M-pQ/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/z-VqYUVUx6c_kEs4guZJeQ/o.jpg",
    ];
    const images4 = [
      "https://s3-media0.fl.yelpcdn.com/bphoto/tbpwes9ngglFKjmBpUubiw/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/I11UCBilB35NcVJ8mwCrDQ/o.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/8Nc222zQHXh_58AeyMbv6A/o.jpg",
    ];

    let [imageIndex, setImageIndex] = useState(0);
    let [imageIndex2, setImageIndex2] = useState(0);
     let [imageIndex3, setImageIndex3] = useState(0);
     let [imageIndex4, setImageIndex4] = useState(0);


    useEffect(() => {
      const time = setInterval(() => {
        if (imageIndex < images.length - 1) {
          setImageIndex((value) => value + 1);
          imageIndex++;
        } else {
          setImageIndex(0);
          imageIndex = 0;
        }
      }, 2000);
      const time2 = setInterval(() => {
        if (imageIndex2 < images.length - 1) {
          setImageIndex2((value) => value + 1);
          imageIndex2++;
        } else {
          setImageIndex2(0);
          imageIndex2 = 0;
        }
      }, 3000);
      const time3 = setInterval(() => {
        if (imageIndex3 < images.length - 1) {
          setImageIndex3((value) => value + 1);
          imageIndex3++;
        } else {
          setImageIndex3(0);
          imageIndex3 = 0;
        }
      }, 1500);
      const time4 = setInterval(() => {
        if (imageIndex4 < images.length - 1) {
          setImageIndex4((value) => value + 1);
          imageIndex4++;
        } else {
          setImageIndex4(0);
          imageIndex4 = 0;
        }
      }, 2200);
      return () => {
        clearInterval(time);
        clearInterval(time2);
        clearInterval(time3);
        clearInterval(time4);
      };
    }, []);

    return (
      <div className="GuestcontentMain">
        <div className="background">
          <div className="background_columnLeft">
            <div className="logo">
              <img
                alt=""
                src="https://cdn.discordapp.com/attachments/907133739128217621/907305017021714472/logo_invert.png"
              />
            </div>
            <div className="logoTextContainer">
              <h1 className="logoText">SASEEME</h1>
              <p>yum.</p>
            </div>
            <div className="logoHR"></div>
            <div>
              <p className="headingText">
                Find your favorite dishes and share it with the world!
              </p>
            </div>
          </div>
          <div className="background_columnRight">
            <div className="imageCarousel">
              <img
                alt=""
                id="guestImage"
                src={images[imageIndex]}
                height="200px"
                width="200px"
              />
              <img
                alt=""
                src={images2[imageIndex2]}
                height="200px"
                width="200px"
              />
              <img
                alt=""
                src={images3[imageIndex3]}
                height="200px"
                width="200px"
              />
              <img
                alt=""
                src={images4[imageIndex4]}
                height="200px"
                width="200px"
              />
            </div>
          </div>
          <Searchbar />
        </div>
        <Features />
      </div>
    );
}

export default Guestcontent;
