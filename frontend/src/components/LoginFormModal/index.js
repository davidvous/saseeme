import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginFormPage.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="loginButtonContainer">
            <button className="loginButton" onClick={() => setShowModal(true)}>LOG IN</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm/>
                </Modal>
            )}
        </div>
    );
}

export default LoginFormModal;

