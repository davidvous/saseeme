import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addFood } from "../../store/foods";
import "../LoginFormModal/LoginFormPage.css";

import CreateFood from './createFood'
import CreateFoodRes from "./createFoodRes";
import CreateFoodLoc from "./createFoodLoc";

function CreateForm({ setShowModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userRestaurants = useSelector((state) =>
    Object.values(state.restaurants)
  );
  const [page, setPage] = useState(0);


  const FormTitles = [
    "Add a food dish",
    "Choose which restaurant",
    "Checkin and leave a comment!",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <CreateFood setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage}/>
    } else if (page === 1) {
      return <CreateFoodRes userId={sessionUser.id} setPage={setPage} />;
    } else {
      return <CreateFoodLoc />;
    }
  };
  
  return (
    <div className="modal_container">
      <h2>{FormTitles[page]}</h2>
      {PageDisplay()}
    </div>
  );
}

export default CreateForm;
