import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateFood from "./createFood";
import "./createFoodModal.css";

function CreateFoodModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="createFormContainer">
      <button className="loginButton" onClick={() => setShowModal(true)}>
        POST A NEW FOOD
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFood open={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreateFoodModal;
