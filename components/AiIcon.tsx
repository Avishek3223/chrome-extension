// components/AiIcon.tsx
import React, { useState } from 'react';
import Modal from './Modal'; // Your modal component
import ai from './ai.svg'; // Your icon source

const AiIcon: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function insertResponse(responseText: string) {
    const messageInput = document.querySelector('div[contenteditable="true"]') as HTMLElement; // Find LinkedIn input field
    if (messageInput) {
      messageInput.innerText = responseText; // Insert the message
      messageInput.dispatchEvent(new InputEvent('input', { bubbles: true })); // Trigger input event for LinkedIn
    }
  }

  
  const handleGenerate = () => {
    const responseText = "Thank you for the opportunity! If you have any more questions, feel free to ask.";
    insertResponse(responseText); // Call the function to insert response
    setShowModal(false);
  };

  return (
    <>
      <img
        src={ai} // Ensure this path is correct
        alt="AI Icon"
        className="cursor-pointer w-6 h-6"
        onClick={handleIconClick}
      />
      {showModal && (
        <Modal onClose={handleCloseModal} onGenerate={handleGenerate} />
      )}
    </>
  );
};

export default AiIcon;
