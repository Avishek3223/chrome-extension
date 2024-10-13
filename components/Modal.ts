export function createModals(): { initialModal: HTMLDivElement; resultModal: HTMLDivElement } {
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
  `;

  const input = document.createElement("input");
  input.placeholder = "Your prompt";
  input.style.cssText = `
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: #f3f6f8;
    border-radius: 4px;
  `;

  const generateButton = document.createElement("button");
  generateButton.textContent = "Generate";
  generateButton.style.cssText = `
    background-color: #3B82F6;
    color: white;
    margin-top: 2rem;
    border: none;
    font-size: 1.5rem;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 38rem;
  `;

  initialModalContent.appendChild(input);
  initialModalContent.appendChild(generateButton);
  initialModal.appendChild(initialModalContent);

  // Result modal
  const resultModal = document.createElement("div");
  resultModal.className = "ai-assist-modal result-modal";
  resultModal.style.cssText = initialModal.style.cssText;

  const resultModalContent = document.createElement("div");
  resultModalContent.style.cssText = `
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const promptDisplay = document.createElement("div");
  promptDisplay.style.cssText = `
    background-color: #f3f6f8;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
    text-align: right;
  `;

  const responseText = document.createElement("div");
  responseText.style.cssText = `
    background-color: #e3f2fd;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
  `;

  const regenerateInput = document.createElement("input");
  regenerateInput.placeholder = "Your prompt";
  regenerateInput.style.cssText = input.style.cssText;

  const buttonContainer = document.createElement("div");
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  `;

  const insertButton = document.createElement("button");
  insertButton.textContent = "Insert";
  insertButton.style.cssText = `
    padding: 8px 14px;
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
  `;

  const regenerateButton = document.createElement("button");
  regenerateButton.textContent = "Regenerate";
  regenerateButton.style.cssText = `
    padding: 8px 16px;
    background-color: #3B82F6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;

  buttonContainer.appendChild(insertButton);
  buttonContainer.appendChild(regenerateButton);

  resultModalContent.appendChild(promptDisplay);
  resultModalContent.appendChild(responseText);
  resultModalContent.appendChild(regenerateInput);
  resultModalContent.appendChild(buttonContainer);
  resultModal.appendChild(resultModalContent);

  generateButton.addEventListener("click", () => {
    promptDisplay.textContent = input.value;
    responseText.textContent = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    hideModal(initialModal);
    showModal(resultModal);
  });

  insertButton.addEventListener("click", () => {
    const messageBox = document.querySelector('.msg-form__contenteditable[contenteditable="true"]') as HTMLElement | null;
    if (messageBox) {
      messageBox.textContent = responseText.textContent;
      triggerInputEvent(messageBox);
    }
    hideModal(resultModal);
  });

  regenerateButton.addEventListener("click", () => {
    promptDisplay.textContent = regenerateInput.value;
    // Here you would typically call your AI service to generate a new response
    responseText.textContent = "This is a regenerated response based on your new prompt.";
    regenerateInput.value = "";
  });

  return { initialModal, resultModal };
}

// Utility functions

export function showModal(modal: HTMLElement) {
  modal.style.display = "flex";
}

export function hideModal(modal: HTMLElement) {
  modal.style.display = "none";
}

function triggerInputEvent(element: HTMLElement) {
  const event = new Event('input', {
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

// Main execution
const { initialModal, resultModal } = createModals();
document.body.appendChild(initialModal);
document.body.appendChild(resultModal);

// Create and add the AI Assist button
const aiAssistButton = document.createElement("button");
aiAssistButton.textContent = "AI Assist";
aiAssistButton.style.cssText = `
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1000;
  padding: 5px 10px;
  background-color: #0a66c2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
aiAssistButton.addEventListener("click", () => showModal(initialModal));

// Function to add the button to the message box
function addButtonToMessageBox() {
  const messageBox = document.querySelector(
    '.msg-form__contenteditable[contenteditable="true"]'
  ) as HTMLElement | null;
  if (messageBox && !messageBox.querySelector(".ai-assist-button")) {
    messageBox.style.position = "relative";
    messageBox.appendChild(aiAssistButton);
  }
}

// Initial check and setup for the message box
addButtonToMessageBox();

// Observer to watch for dynamically added message boxes
const observer = new MutationObserver(() => {
  addButtonToMessageBox();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});