import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCheckin } from "../../store/checkins";
import "../LoginFormModal/LoginFormPage.css";

function CreateCheckinSing({food_id, setShowModal}) {

    const sessionUser = useSelector((state) => state.session.user);
  const [comment, setComment] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const dispatch = useDispatch();

  const validate = () => {
    const validateErrors = [];

    if (!comment) validateErrors.push("Please enter a comment!");

    return validateErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const payload = {
      user_id: sessionUser.id,
      food_id,
      comment
    };

    dispatch(addCheckin(payload));
    setShowModal(false);
  };

  return (
    <div className="modal_container">
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
        <label htmlFor="comment">How was it?</label>
        <div className="checkin_first">
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            placeholder="Comment..."
            height="300px"
          />
        </div>
        <div className="modal_submit">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Add Checkin!
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCheckinSing;
