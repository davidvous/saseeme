import React from 'react';
import './Searchbar.css';

function Searchbar() {

    return (
        <div className="SearchbarContainer">
            <div className="SearchQuery">
                <form className="SearchText" method="GET" action="/search">
                </form>
            </div>
            <div className="SearchButtonContainer">
                <input type="submit" className="searchButton" value="Search" />
                <i className="fas fa-utensils"></i>
            </div>
        </div >
    );
}

export default Searchbar;
