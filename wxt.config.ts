import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    version: "1.0.2",
    permissions: ["storage", "activeTab", "scripting"],
    content_scripts: [
      {
        matches: ["*://*.linkedin.com/*"], // Target LinkedIn
        js: ["content-scripts/content.js"],
        run_at: "document_idle", // Run when the document is fully loaded
      },
    ],
    background: {
      service_worker: "entrypoints/background.ts",
    },
    action: {
      default_popup: "entrypoints/popup/index.html", // If you have a popup page, otherwise remove
    },
    web_accessible_resources: [
      {
        resources: ["./components/ai.svg","./components/AiIcon.tsx","./components/Modal.tsx","./entrypoints/popup/main.tsx"], // If there are assets that need to be accessible
        matches: ["*://*.linkedin.com/*"], // Limit to LinkedIn or other specific domains
      },
    ],
  },
});
