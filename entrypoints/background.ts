export default defineBackground(() => {
  console.log("Hello background!", { id: chrome.runtime.id }); // Using chrome instead of browser for compatibility

  // Fired when the extension is installed or updated
  chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    chrome.storage.sync.set({ key: 'defaultValue' }, () => {
      console.log('Default settings initialized');
    });
  });

  // Fired when Chrome starts up
  chrome.runtime.onStartup.addListener(() => {
    console.log("Extension started");
  });

  // Listen for messages from content scripts or popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received:", request);

    // Example: Handle headline text from content script
    if (request.action === 'headline' && request.text) {
      console.log("Received LinkedIn headline:", request.text);

      // Respond to the content script
      sendResponse({ success: true, message: 'Headline received' });
    } else {
      sendResponse({ success: false, message: 'Unknown action or no text provided' });
    }
  });
});
