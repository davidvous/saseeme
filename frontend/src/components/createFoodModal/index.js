import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateForm from "./createForm";
import "./createFoodModal.css";

function CreateFoodModal({bid}) {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="createFoodContainer">
      <button className="allPurpose" onClick={() => setShowModal(true)}>
        POST NEW CHECK-IN/FOOD/RESTAURANT
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateForm bid={bid} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreateFoodModal;
