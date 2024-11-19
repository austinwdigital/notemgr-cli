const { exec } = require('child_process');
const os = require('os');
const logger = require('./logger'); // Import the logger

/**
 * Sends a notification and logs it.
 * @param {string} title - The title of the notification
 * @param {string} message - The notification message
 */
function notify(title, message) {
  const platform = os.platform();
  logger.info(`Notification: ${title} - ${message}`); // Log the notification

  if (platform === 'darwin') {
    // macOS
    exec(`osascript -e 'display notification "${message}" with title "${title}"'`);
  } else if (platform === 'linux') {
    // Linux
    exec(`notify-send "${title}" "${message}"`);
  } else if (platform.startsWith('win')) {
    // Windows
    exec(`msg * "${title}: ${message}"`);
  } else {
    // Fallback for unsupported systems
    console.log(`${title}: ${message}`);
  }
}

module.exports = notify;
