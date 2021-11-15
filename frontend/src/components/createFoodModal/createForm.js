import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../LoginFormModal/LoginFormPage.css";
import { getFoods } from "../../store/foods";
import { getCheckins } from "../../store/checkins";
import { getRestaurants } from "../../store/restaurants";

import CreateFood from './createFood'
import CreateFoodRes from "./createFoodRes";
import CreateCheckin from "./createCheckin";

function CreateForm({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userFoods = useSelector((state) => Object.values(state.foods).find(item => item.user_id == sessionUser.id));
  const [page, setPage] = useState(2);
  
  useEffect(() => {
    dispatch(getFoods());
    dispatch(getCheckins());
    dispatch(getRestaurants());
  }, [dispatch]);
  
  
  const FormTitles = [
    "Add a food dish",
    "Choose which restaurant",
    "Checkin and leave a comment!",
  ];
  
  const PageDisplay = () => {
    if (page === 0) {
      return <CreateFood setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage}/>
    } else if (page === 1) {
      return (
        <CreateFoodRes setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage} />
        );
      } else if (page === 2) {
        return <CreateCheckin setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage} />;
      }
    };

  return (
    
    <div className={page}>
      <h2>{FormTitles[page]}</h2>
      {PageDisplay()}
    </div>
  );
}

export default CreateForm;
