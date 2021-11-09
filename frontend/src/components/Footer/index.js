import React from 'react';
import './Footer.css';

function Footer({ links }) {
    const { email, linkedin, github } = links;
    return (
        <div className="FooterContent">
            <div className="info">
                <p> Connect with me: </p>
                <a href={`mailto:${email}`}>
                    <p className="name"> David Le</p></a>
            </div>
            <a href={`${github}`}>
                <img height="40px" width="40px" src="https://cdn.discordapp.com/attachments/907133739128217621/907463508101316659/github.png" />
            </a>
            <a href={`${linkedin}`}>
                <img height="35px" width="140px" src="https://cdn.discordapp.com/attachments/907133739128217621/907465323828084746/linkedin.png" /></a>
        </div >
    );
}

export default Footer;
