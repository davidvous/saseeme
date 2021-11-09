import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <div className="FooterContent">
            <div className="info">
                <p> Connect with me: </p>
                <p className="name"> David Le</p>
            </div>
            <img height="50px" width="50px" src="https://cdn.discordapp.com/attachments/907133739128217621/907463508101316659/github.png" />
            <img height="42px" width="160px" src="https://cdn.discordapp.com/attachments/907133739128217621/907465323828084746/linkedin.png" />
        </div >
    );
}

export default Footer;
