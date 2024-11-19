const fs = require('fs');
const path = require('path');
const logger = require('./utils/logger');
const backupNoteToGist = require('./commands/backup');

const NOTES_DIR = path.join(__dirname, './notes');

function syncNotes() {
  logger.info(`Watching for changes in ${NOTES_DIR}...`);
  fs.watch(NOTES_DIR, (eventType, filename) => {
    if (eventType === 'change' && filename.endsWith('.md')) {
      const title = path.basename(filename, '.md');
      logger.info(`Detected change in "${title}". Syncing...`);
      backupNoteToGist(title);
    }
  });
}

module.exports = syncNotes;
