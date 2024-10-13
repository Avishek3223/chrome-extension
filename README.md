# LinkedIn Message Assistant Extension

This extension enhances your LinkedIn messaging experience by providing AI-powered message suggestions directly in the LinkedIn message box.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Demo](#demo)

## Installation

To install the LinkedIn Message Assistant Extension, follow these steps:

1. Clone the repository:
  ```bash
    git clone https://github.com/yourusername/linkedin-message-assistant.git
   ```
3. Navigate to the project directory:
  ```bash
   cd linkedin-message-assistant
   ```
4. Install dependencies:
  ```bash
   yarn install
   ```
5. Build the extension:
  ```bash
   yarn build
   ```
6. Load the extension in your browser:
- Open Chrome and go to `chrome://extensions/`
- Enable "Developer mode" in the top right corner
- Click "Load unpacked" and select the `.output` folder in your project directory

## Usage

1. Open LinkedIn in your browser.
2. Navigate to any conversation or start a new message.
3. Click on the message box to activate it.
4. You'll see a new AI icon appear near the message box.
5. Click on the AI icon to open the assistant modal.
6. In the modal, write a prompt or description of the message you want to generate.
7. Click "Generate" to create an AI-suggested message.
8. A second modal will appear with the generated message.
9. Review the message and click "Insert" to add it to the LinkedIn message box.
10. Edit the message as needed and send it through LinkedIn's interface.

## Development

To set up the project for development:

1. Follow the installation steps above.
2. Instead of building, run the development server:
```bash
   yarn dev
   ```
3. The extension will automatically reload when you make changes to the code.

## Demo

https://github.com/user-attachments/assets/2da50fd3-3311-49c8-89ed-bd4bf0526550


For any issues or feature requests, please open an issue on the GitHub repository. We appreciate your feedback and contributions!
