import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCheckins, changeCheckin, removeCheckin } from "../../store/checkins";
import "../LoginFormModal/LoginFormPage.css";

function EditCheckin({ comment: checkinComment, checkinId, food_id, setShowModal}) {
  const history = useHistory();
  const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const checkinCreated = useSelector((state) => state.checkins[checkinId].createdAt);

    const [comment, setComment] = useState(checkinComment);
    const [validationErrors, setValidationErrors] = useState([]);

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
        id: checkinId,
        user_id: sessionUser.id,
        food_id: food_id,
        updatedAt: Date.now(),
        createdAt: checkinCreated,
        comment
    };


    dispatch(changeCheckin(payload));

    history.push("/");
    setShowModal(false);
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();

    dispatch(removeCheckin(checkinId));

    history.push("/");
    setShowModal(false);
  };

  return (
    <div className="editCheckin_container">
      <h2>Edit Comment</h2>
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">How was it?</label>
        <div className="checkin_first">
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            height="300px"
          />
        </div>
        <div className="modal_submit">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Edit Checkin!
          </button>
        </div>
        <div className="checkin_delete">
          <button onClick={handleSubmitDelete}>
            DELETE
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCheckin;
