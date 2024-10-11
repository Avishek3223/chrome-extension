// components/Modal.tsx
import React from 'react';

const Modal: React.FC<{ onClose: () => void; onGenerate: () => void }> = ({ onClose, onGenerate }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Generate Reply</h2>
        <button onClick={onGenerate}>Generate Response</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
