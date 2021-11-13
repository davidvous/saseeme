import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../../store/foods";
import "../LoginFormModal/LoginFormPage.css";

function CreateFood({setShowModal, userId, setPage}) {

    const dispatch = useDispatch();
    const userRestaurants = useSelector((state) => Object.values(state.restaurants));

    const [restaurant_id, setRestaurant_id] = useState(1);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    const validate = () => {
        const validateErrors = [];

        if (!name) validateErrors.push("Please provide the food dish name.");
        if (!description)
            validateErrors.push("Please provide a brief description of the food dish.");
        if (!imageUrl) validateErrors.push("please provide an URL to the image of the food dish.");

        return validateErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();
        if (errors.length > 0) return setValidationErrors(errors);

        const payload = {
            user_id: userId,
            restaurant_id,
            name,
            imageUrl,
            description,
        };

        dispatch(addFood(payload));
        setShowModal(false);
    };

    return (
      <>
        {validationErrors.length > 0 && (
          <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form>
          <label htmlFor="restaurants">Choose a restaurant:</label>
          <div className="modal_username">
            <select
              name="restaurants"
              id="restaurants"
              onChange={(e) => setRestaurant_id(Number(e.target.value))}
            >
              {userRestaurants.map((each, idx) => (
                <option key={each.id} value={each.id}>
                  {each.title}
                </option>
              ))}
            </select>
            <button
              className="submit-button"
              onClick={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            >
              Don't see the restaurant? Add it!
            </button>
          </div>
          <label htmlFor="restaurants">Food Dish Name:</label>
          <div className="modal_username">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Food Dish Name"
            />
          </div>
          <label htmlFor="restaurants">Enter URL of Food:</label>
          <div className="modal_username">
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              type="text"
              placeholder="URL of Food Dish"
            />
          </div>
          <label htmlFor="restaurants">Enter description of Food Dish:</label>
          <div className="modal_username">
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder="Food Description"
            />
          </div>
          <div className="modal_submit">
            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              Add Food
            </button>
          </div>
        </form>
      </>
    );
}

export default CreateFood;
