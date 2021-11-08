import React from 'react';
import './Guestcontent.css';

function Guestcontent() {

    return (
        <div className="GuestcontentMain">
            <div className="background">
                <div className="background_columnLeft" />
                <div>
                    <img src="https://cdn.discordapp.com/attachments/907133739128217621/907305017021714472/logo_invert.png" />
                </div>
                <div className="bg_logo_text">
                    <p>Saseeme</p>
                    <p>Yum</p>
                </div>

                <div className="background_columnRight" />
            </div>
            <div className="searchbar" />
            <div className="features" />
        </div>
    );
}

export default Guestcontent;
