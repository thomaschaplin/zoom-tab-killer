# zoom-tab-killer

## Description

Zoom Tab Killer is a Chrome Extension designed to solve the problem of residual tabs left behind after joining Zoom meetings through links. It automatically closes these tabs once the meeting has ended, ensuring a clutter-free browsing experience.

## Features

- Automatically closes tabs opened by Zoom meetings.
- Compatible with various Zoom meeting URLs, including standard Zoom domains and custom subdomains.
- Simple setup and operation.

## How it Works

The extension listens for completed web navigation events on Zoom-related URLs. When a navigation event matches certain criteria, such as meeting success status or specific subdomains, the extension automatically closes the associated tab. This process helps keep your browser organized and free of unnecessary tabs.

## Installation

1. Clone or download the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded the extension.
5. Once loaded, the Zoom Tab Killer extension will be active and ready to use.

## Usage

Simply join a Zoom meeting using a link, and the extension will take care of closing the associated tab once the meeting ends. No additional setup or interaction is required.

## Permissions

- `webNavigation`: Allows the extension to listen for navigation events and take action accordingly.
- `tabs`: Enables the extension to manipulate browser tabs, including closing tabs as needed.
- `host_permissions`: Grants access to specific domains, ensuring compatibility with Zoom-related URLs.

## Support

For any questions, issues, or feature requests, please [open an issue](https://github.com/thomaschaplin/zoom-tab-killer/issues) on GitHub. Contributions are also welcome through pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
