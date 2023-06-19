import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, onAddRandomTodo, children }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
        <button className="modal-button" onClick={onAddRandomTodo}>
          Add Random Todo
        </button>
      </div>
    </div>
  );
};

export default Modal;
