const fs = require('fs');
const path = require('path');

// Define log file path
const LOG_FILE = path.join(__dirname, '../notemgr.log');

/**
 * Writes a log message to the log file with a timestamp.
 * @param {string} level - Log level (INFO, ERROR, etc.)
 * @param {string} message - Message to log
 */
function logToFile(level, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, logMessage);
}

/**
 * Logs an info-level message.
 * @param {string} message - Message to log
 */
function info(message) {
  console.log(`\x1b[36mINFO:\x1b[0m ${message}`); // Styled in cyan
  logToFile('INFO', message);
}

/**
 * Logs a warning-level message.
 * @param {string} message - Message to log
 */
function warn(message) {
  console.log(`\x1b[33mWARNING:\x1b[0m ${message}`); // Styled in yellow
  logToFile('WARNING', message);
}

/**
 * Logs an error-level message.
 * @param {string} message - Message to log
 */
function error(message) {
  console.error(`\x1b[31mERROR:\x1b[0m ${message}`); // Styled in red
  logToFile('ERROR', message);
}

module.exports = {
  info,
  warn,
  error
};
