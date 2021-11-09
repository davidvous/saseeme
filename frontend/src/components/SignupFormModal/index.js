import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';
import "../LoginFormModal/LoginFormPage.css";

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="loginButton" onClick={() => setShowModal(true)}>SIGN UP</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm />
                </Modal>
            )}
        </>

    )
};


export default SignupFormModal;


