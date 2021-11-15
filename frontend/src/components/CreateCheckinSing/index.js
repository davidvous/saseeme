import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateCheckinSing from "./CreateCheckinSing";

function CreateCheckinSingModal({food_id}) {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="editFormContainer">
      <button className="loginButton" onClick={() => setShowModal(true)}>
        CHECKIN
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCheckinSing food_id={food_id} setShowModal={setShowModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default CreateCheckinSingModal;
