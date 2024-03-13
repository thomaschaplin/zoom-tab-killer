# zoom-tab-killer

## Description

Zoom Tab Killer is a Chrome Extension designed to automatically close the launched window from Zoom meetings. It ensures a clutter-free browsing experience by closing the tabs associated with Zoom meetings.

## Features

- Automatically closes the tabs opened by Zoom meetings.
- Compatible with various Zoom meeting URLs, including standard Zoom domains and custom subdomains.
- Simple setup and operation.

## How it Works

The extension utilizes a service worker and content script to detect completed web navigation events on Zoom-related URLs. When a navigation event matches certain criteria, such as meeting success status or specific subdomains, the extension automatically closes the associated tab. This process helps keep your browser organized and free of unnecessary tabs.

## Installation

1. Clone or download the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded the extension.
5. Once loaded, the Zoom Tab Killer extension will be active and ready to use.

## Usage

Simply join a Zoom meeting using a link, and the extension will take care of closing the associated tab once the meeting ends. No additional setup or interaction is required.

## Support

For any questions, issues, or feature requests, please [open an issue](https://github.com/thomaschaplin/zoom-tab-killer/issues) on GitHub. Contributions are also welcome through pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
