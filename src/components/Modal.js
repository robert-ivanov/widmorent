import React from 'react';
import './Modal.css'; // Add your styles for modal

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null; // If not open, don't render the modal

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* Close button */}
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
