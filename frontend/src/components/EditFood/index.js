import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditFood from "./EditFood";


function EditFoodModal({ food_id,
                name,
                description,
                image: imageUrl,
                restaurant_id,}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="editFormContainer">
      <button className="loginButton" onClick={() => setShowModal(true)}>
        EDIT
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditFood
            key={food_id}
            food_id={food_id}
            food_name={name}
            food_description={description}
            image={imageUrl}
            food_restaurant_id={restaurant_id}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default EditFoodModal;
