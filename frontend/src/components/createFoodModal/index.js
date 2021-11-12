import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateForm from "./createForm";
import "./createFoodModal.css";

function CreateFoodModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="createFoodContainer">
      <button className="loginButton postNewButton" onClick={() => setShowModal(true)}>
        POST A NEW FOOD
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreateFoodModal;
