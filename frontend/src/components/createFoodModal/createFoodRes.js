import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRes } from '../../store/restaurants';

function CreateFoodRes({ setShowModal, userId, setPage }) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();

  const validate = () => {
    const validateErrors = [];

    if (!title) validateErrors.push("Please provide the restaurant's name.");
    if (!address) validateErrors.push("Please provide an address.");
    if (!city) validateErrors.push("Please enter a valid city.");
    if (!state) validateErrors.push("Please enter a valid state.");
    if (!zipCode) validateErrors.push("Please enter a valid Zip Code.");
    if (!country) validateErrors.push("Please enter a valid country.");
    if (!lat) validateErrors.push("Please enter a valid latitude.");
    if (!lng) validateErrors.push("Please enter a valid longitude.");

    return validateErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      user_id: userId,
      title,
      address,
      city,
      state,
      zipCode,
      country,
      lat,
      lng,
    };
    dispatch(addRes(payload));
    setPage(0);
    // setShowModal(false);
  };

  return (
    <>
      {validationErrors.length > 0 && (
        <div className="validationErrors">
          The following errors were found:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form>
        <label htmlFor="restaurants">Add a new Restaurant:</label>
        <div className="modal_username">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Restaurant name..."
          />
        </div>
        <div className="modal_username">
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="text"
            placeholder="Address..."
          />
        </div>
        <div className="modal_username">
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            placeholder="City..."
          />
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            type="text"
            placeholder="State..."
          />
        </div>
        <div className="modal_username">
          <input
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
            type="text"
            placeholder="ZipCode..."
          />
          <input
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            type="text"
            placeholder="Country..."
          />
        </div>
        <div className="modal_username">
          <input
            onChange={(e) => setLat(e.target.value)}
            value={lat}
            type="number"
            placeholder="Latitude..."
          />
          <input
            onChange={(e) => setLng(e.target.value)}
            value={lng}
            type="number"
            placeholder="Longitude..."
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Add Restaurant
        </button>
      </form>
    </>
  );
}

export default CreateFoodRes;