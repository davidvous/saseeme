import React, {useState} from 'react';
import { useDispatch }  from 'react-redux'
import './Searchbar.css';
import {addSearch} from '../../store/search';
import SearchModal from "../../components/SearchModal";


function Searchbar() {

      const [search, setSearch] = useState("");
      const dispatch = useDispatch();

      const handleSubmit = (e) => {
        e.preventDefault();

        
        const payload = {
            search,
        };
        <SearchModal />;
        dispatch(addSearch(payload));
      };

    return (
      <div className="SearchbarContainer">
        <div className="SearchQuery">
          <form className="SearchText" method="GET" action="/search">
            <input
              className="SearchQ"
              onChange={(e) => setSearch(e.target.value)}
              name="SearchQ"
              placeholder="Search for dishes or restaurants!"
              type="search"
              value={search}
            />
          </form>
        </div>
        <button type="submit" className="SubmitButton" onClick={handleSubmit}>
          <i className="fas fa-utensils"></i>
        </button>
      </div>
    );
}

export default Searchbar;
