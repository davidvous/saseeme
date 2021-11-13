import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addCheckin} from "../../store/checkins";
import "../LoginFormModal/LoginFormPage.css";


function CreateCheckin({ setShowModal, userId, setPage }) {
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => Object.values(state.foods));

  const [foodId, setfoodId] = useState(1);
  const [comment, setComment] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const validate = () => {
    const validateErrors = [];

    if (!comment) validateErrors.push("Please enter a comment!");

    return validateErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(allFoods.map(item => item.food_id), ",----");

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      user_id: userId,
      food_id: foodId,
      comment: comment,
    };
    dispatch(addCheckin(payload));
    // setPage(0);
    // setShowModal(false);
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
        <label htmlFor="restaurants">Check in!</label>
        <div className="modal_username">
          <select
            name="food"
            id="food"
            onChange={(e) => setfoodId(Number(e.target.value))}
          >
            {allFoods
              .filter((each) => each.user_id == userId)
              .map(({ id: food_id, name }) => (
                <option key={food_id} value={food_id}>
                  {name}
                </option>
              ))}
          </select>
          <button
            className="submit-button"
            onClick={(e) => {
              e.preventDefault();
              setPage(0);
            }}
          >
            I ate something different this time!
          </button>
        </div>
        <label htmlFor="comment">How was it?</label>
        <div className="modal_username">
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            placeholder="Comment..."
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

export default CreateCheckin;