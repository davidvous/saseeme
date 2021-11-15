import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SearchResults from "./SearchModal";
import "../LoginFormModal/LoginFormPage.css";

function SearchModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SearchResults />
        </Modal>
      )}
    </>
  );
}

export default SearchModal;
