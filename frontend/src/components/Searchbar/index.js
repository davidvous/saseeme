import React from 'react';
import './Searchbar.css';

function Searchbar() {

    return (
        <div className="SearchbarContainer">
            <div className="SearchQuery">
                <form className="SearchText" method="GET" action="/search">
                    <input className="SearchQ" name="SearchQ" placeholder="Search for dishes or restaurants!" type="search" />
                </form>
            </div>
            <button type="submit" className="SubmitButton" value="Search">
                <i className="fas fa-utensils"></i>
            </button>
        </div>
    );
}

export default Searchbar;
