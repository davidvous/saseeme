import React from 'react';
import './Guestcontent.css';
import Searchbar from "../Searchbar"
import Features from '../Features'

function Guestcontent() {

    return (
        <div className="GuestcontentMain">
            <div className="background">
                <div className="background_columnLeft">
                    <div className="logo">
                        <img src="https://cdn.discordapp.com/attachments/907133739128217621/907305017021714472/logo_invert.png" />
                    </div>
                    <div className="logoTextContainer">
                        <h1 className="logoText">SASEEME</h1>
                        <p>yum.</p>
                    </div>
                    <div className="logoHR">
                    </div>
                    <div>
                        <p className="headingText">Find your favorite dishes and share it with the world!</p>
                    </div>
                </div>
                <div className="background_columnRight">
                    <div className="imageCarousel">
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EzNDh4YuvNrJfmPYEpPZzQ/o.jpg" height="200px" width="200px" />
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EzNDh4YuvNrJfmPYEpPZzQ/o.jpg" height="200px" width="200px" />
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EzNDh4YuvNrJfmPYEpPZzQ/o.jpg" height="200px" width="200px" />
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EzNDh4YuvNrJfmPYEpPZzQ/o.jpg" height="200px" width="200px" />
                    </div>
                </div>
                <Searchbar />
            </div>
            <Features />
        </div>
    );
}

export default Guestcontent;
