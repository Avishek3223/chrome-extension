import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure your styles are imported

const Main: React.FC = () => {
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  useEffect(() => {
    const messageInputBox = document.querySelector('div[contenteditable="true"]');

    if (!messageInputBox) {
      console.warn("Message input box not found.");
      return;
    }

    const handleFocus = () => {
      console.log("Input focused");
      setIsMessageFocused(true);
    };
    const handleBlur = () => {
      console.log("Input blurred");
      setIsMessageFocused(false);
    };

    messageInputBox.addEventListener('focus', handleFocus);
    messageInputBox.addEventListener('blur', handleBlur);
    
    return () => {
      messageInputBox.removeEventListener('focus', handleFocus);
      messageInputBox.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default Main;
