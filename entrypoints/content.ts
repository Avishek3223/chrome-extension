import { createModals, showModal } from "../components/Modal";

export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  runAt: "document_idle",
  main() {
    console.log("Content script initialized");

    function createButton(): HTMLButtonElement {
      const button = document.createElement("button");
      button.textContent = "AI Assist";
      button.className = "ai-assist-button";
      button.style.cssText = `
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 10000;
        padding: 5px 10px;
        background-color: #0a66c2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        display: none;
      `;
      return button;
    }

    function injectButton() {
      const msgBox = document.querySelector(".msg-form__contenteditable");
      if (!msgBox) {
        console.log("Message box not found");
        return;
      }

      let button = msgBox.querySelector(
        ".ai-assist-button"
      ) as HTMLButtonElement;
      if (!button) {
        button = createButton();
        msgBox.appendChild(button);
        console.log("Button injected");

        const { initialModal, resultModal } = createModals(); // Destructure the modals
        document.body.appendChild(initialModal); // Append each modal separately
        document.body.appendChild(resultModal);

        // Button event listener to show the initial modal
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("AI Assist button clicked");
          showModal(initialModal); // Show the initial modal
        });
      }

      // Show button when message box is focused
      msgBox.addEventListener("focus", () => {
        button.style.display = "block";
      });

      // Hide button when message box loses focus
      msgBox.addEventListener("blur", () => {
        // Delay hiding to allow for button click
        setTimeout(() => {
          if (!msgBox.contains(document.activeElement)) {
            button.style.display = "none";
          }
        }, 100);
      });

      // Show button when typing
      msgBox.addEventListener("input", () => {
        button.style.display = "block";
      });
    }

    // Initial injection
    injectButton();

    // Set up an observer to inject the button if the DOM changes
    const observer = new MutationObserver(() => {
      injectButton();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    console.log("Content script setup complete");
  },
});
