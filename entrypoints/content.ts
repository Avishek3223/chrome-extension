export default defineContentScript({
  matches: ["*://*.linkedin.com/*"], // Run on LinkedIn
  runAt: "document_idle", // Script runs when DOM is fully loaded
  main() {
    console.log("Content script initialized");

    // Safely select the LinkedIn headline element
    const headline = document.querySelector('.top-card-layout__title');

    if (headline) {
      console.log("LinkedIn headline found:", headline.textContent);

      // Send headline text to background script
      chrome.runtime.sendMessage({ action: 'headline', text: headline.textContent }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message:", chrome.runtime.lastError);
        } else {
          console.log("Response from background script:", response);
        }
      });
    } else {
      console.log("LinkedIn headline not found.");
    }
  },
});
