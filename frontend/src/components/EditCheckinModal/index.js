import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditCheckin from "./EditCheckin";

function EditCheckinModal({
  comment,
  checkinId,
  food_id
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="editFormContainer">
      <button className="singleCheckinEdit" onClick={() => setShowModal(true)}>
        EDIT CHECKIN
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCheckin
            comment={comment}
            checkinId={checkinId}
            food_id={food_id}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default EditCheckinModal;
