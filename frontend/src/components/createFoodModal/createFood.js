import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import { addFood } from "../../store/foods";
import "../LoginFormModal/LoginFormPage.css";
import CreateFoodModal from "./index";

function CreateFood( {open}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
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
            user_id: sessionUser.id,
            restaurant_id,
            name,
            imageUrl,
            description,
        };

        console.log(open);
        dispatch(addFood(payload));
    };

    return (
      <div className="modal_container">
        <h2>Add a food dish</h2>
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
        <form onSubmit={handleSubmit}>
          <label for="restaurants">Choose a restaurant:</label>
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
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Food Dish Name"
          />
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            type="text"
            placeholder="URL of Food Dish"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Food Description"
          />
          <button className="submit-button" type="submit">
            Add Food
          </button>
        </form>
      </div>
    );
}

export default CreateFood;
