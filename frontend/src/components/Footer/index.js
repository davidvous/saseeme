import React from 'react';
import './Footer.css';

function Footer({ links }) {
    const { basic, github, linkedin } = links;
    return (
        <div className="FooterContent">
            <div className="info">
                <p> Connect with me: </p>
                <a href={`mailto:${basic.email}`}>
                    <p className="{basic.name}">{basic.name}</p></a>
            </div>
            <a href={`${github.link}`}>
                <img height={`${github.height}`} width={`${github.width}`} src={`${github.imageUrl}`} />
            </a>
            <a href={`${linkedin.link}`}>
                <img height={`${linkedin.height}`} width={`${linkedin.width}`} src={`${linkedin.imageUrl}`} /></a>
        </div >
    );
}

export default Footer;
