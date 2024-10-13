export function createModals(): {
  initialModal: HTMLDivElement;
  resultModal: HTMLDivElement;
} {
  // Initial modal
  const initialModal = document.createElement("div");
  initialModal.className = "ai-assist-modal initial-modal";
  initialModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10001;
  `;

  const initialModalContent = document.createElement("div");
  initialModalContent.style.cssText = `
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 50rem;
    max-width: 90%;
  `;

  const input = document.createElement("input");
  input.placeholder = "Your prompt";
  input.style.cssText = `
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    background-color: white;
    color: black;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `;

  const generateButton = document.createElement("button");
  generateButton.innerHTML = `
  <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z" fill="white"/>
  </svg>  
    Generate
  `;
  generateButton.style.cssText = `
    background-color: #3B82F6;
    color: white;
    border: none;
    font-size: 1.4rem;
    font-weight:600;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    color:#fff;
    display: flex;
    gap:6px;
    align-items: center;
    outline: none;
  `;

  initialModalContent.appendChild(input);
  initialModalContent.appendChild(generateButton);
  initialModal.appendChild(initialModalContent);

  // Result modal
  const resultModal = document.createElement("div");
  resultModal.className = "ai-assist-modal result-modal";
  resultModal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10001;
  `;

  const resultModalContent = document.createElement("div");
  resultModalContent.style.cssText = `
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 50rem;
    max-width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;

  const chatContainer = document.createElement("div");
  chatContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const promptDisplay = document.createElement("div");
  promptDisplay.style.cssText = `
    align-self: flex-end;
    background-color: #f3f6f8;
    padding: 10px;
    border-radius: 15px 15px 0 15px;
    font-size: 14px;
    max-width: 70%;
    word-wrap: break-word;
  `;

  const responseText = document.createElement("div");
  responseText.style.cssText = `
    align-self: flex-start;
    background-color: #e3f2fd;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    font-size: 14px;
    max-width: 70%;
    word-wrap: break-word;
  `;

  chatContainer.appendChild(promptDisplay);
  chatContainer.appendChild(responseText);

  const regenerateInput = document.createElement("input");
  regenerateInput.placeholder = "Your prompt";
  regenerateInput.style.cssText = `
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    background-color: white;
    color: black;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `;


  const buttonContainer = document.createElement("div");
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  `;

  const insertButton = document.createElement("button");
  insertButton.innerHTML = `
  <svg width="11" height="14" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.1 12.3666V1.43331C6.1 1.05553 6.228 0.739087 6.484 0.483976C6.74 0.228865 7.05644 0.100864 7.43333 0.0999756C7.81111 0.0999756 8.128 0.227976 8.384 0.483976C8.64 0.739976 8.76756 1.05642 8.76667 1.43331V12.3666L12.6333 8.49998C12.8778 8.25553 13.1889 8.13331 13.5667 8.13331C13.9444 8.13331 14.2556 8.25553 14.5 8.49998C14.7444 8.74442 14.8667 9.05553 14.8667 9.43331C14.8667 9.81109 14.7444 10.1222 14.5 10.3666L8.36667 16.5C8.1 16.7666 7.78889 16.9 7.43333 16.9C7.07778 16.9 6.76667 16.7666 6.5 16.5L0.366666 10.3666C0.122222 10.1222 0 9.81109 0 9.43331C0 9.05553 0.122222 8.74442 0.366666 8.49998C0.611111 8.25553 0.922222 8.13331 1.3 8.13331C1.67778 8.13331 1.98889 8.25553 2.23333 8.49998L6.1 12.3666Z" fill="#666D80"/>
  </svg>  
    Insert
  `;
  insertButton.style.cssText = `
  padding: 8px 14px;
  color: #7e869a;
  border: 2px solid #7e869a;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  font-size:1.4rem;
  font-weight:500;
  align-items: center;
  outline: none;
`;

  const regenerateButton = document.createElement("button");
  regenerateButton.innerHTML = `
    <svg width="14" height="21" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 5px;"> 
      <path d="M8.5 3.24541V0L4.25 4.32724L8.5 8.65459V5.40903C12.006 5.40903 14.875 8.32995 14.875 11.9C14.875 12.9818 14.6094 14.0098 14.131 14.929L15.6719 16.4978C16.5217 15.1454 17 13.5766 17 11.9C17 7.14005 13.1749 3.24541 8.5 3.24541ZM8.5 18.391C4.9937 18.391 2.125 15.4698 2.125 11.9C2.125 10.8182 2.39062 9.79046 2.8687 8.87081L1.32812 7.30224C0.478072 8.60041 0 10.2232 0 11.9C0 16.6599 3.82511 20.5546 8.5 20.5546V23.8L12.75 19.4728L8.5 15.1454V18.391Z" fill="currentColor"/> 
    </svg>
    Regenerate
  `;
  regenerateButton.style.cssText = `
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  color: #fff;
  gap: 4px;
  font-size:1.4rem;
  background:#3B82F6;
  font-weight:500;
  align-items: center;
  outline: none;
  `;

  buttonContainer.appendChild(insertButton);
  buttonContainer.appendChild(regenerateButton);

  resultModalContent.appendChild(chatContainer);
  resultModalContent.appendChild(regenerateInput);
  resultModalContent.appendChild(buttonContainer);
  resultModal.appendChild(resultModalContent);

  // Event listeners
  generateButton.addEventListener("click", () => {
    promptDisplay.textContent = input.value;
    responseText.textContent =
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    hideModal(initialModal);
    showModal(resultModal);

    // Adjust width based on content
    promptDisplay.style.width = "auto";
    responseText.style.width = "auto";
  });

  insertButton.addEventListener("click", () => {
    const messageBox = document.querySelector(
      '.msg-form__contenteditable[contenteditable="true"]'
    ) as HTMLElement | null;
    if (messageBox) {
      // Clear existing content
      messageBox.innerHTML = "";

      // Create a new paragraph element and set its content
      const paragraph = document.createElement("p");
      paragraph.textContent = responseText.textContent || "";

      // Append the paragraph to the message box
      messageBox.appendChild(paragraph);

      // Trigger input event to activate the send button
      triggerInputEvent(messageBox);

      // Set focus to the end of the content
      setEndOfContenteditable(messageBox);
    }
    hideModal(resultModal);
  });

  regenerateButton.addEventListener("click", () => {
    promptDisplay.textContent = regenerateInput.value;
    // Here you would typically call your AI service to generate a new response
    responseText.textContent =
      "This is a regenerated response based on your new prompt.";
    regenerateInput.value = "";

    // Adjust width based on content
    promptDisplay.style.width = "auto";
    responseText.style.width = "auto";
  });

  function preventDefaultStyles(element: HTMLElement) {
    element.addEventListener('focus', (e) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.style.outline = 'none';
      }
    });
    element.addEventListener('blur', (e) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.style.outline = 'none';
      }
    });
    element.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.style.backgroundColor = 'white';
      }
    });
  }

  return { initialModal, resultModal };
}

// Utility functions remain unchanged

// Utility functions
export function showModal(modal: HTMLElement) {
  modal.style.display = "flex";
}

export function hideModal(modal: HTMLElement) {
  modal.style.display = "none";
}

function triggerInputEvent(element: HTMLElement) {
  const event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);

  // Dispatch additional events that might be needed to activate the send button
  element.dispatchEvent(new Event("change", { bubbles: true }));
  element.dispatchEvent(new Event("keyup", { bubbles: true }));
}

function setEndOfContenteditable(contentEditableElement: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(contentEditableElement);
  range.collapse(false);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
