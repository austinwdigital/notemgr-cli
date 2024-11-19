const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');
const NOTES_DIR = path.join(__dirname, '../notes');

function addNote(title, content) {
  if (!fs.existsSync(NOTES_DIR)) {
    fs.mkdirSync(NOTES_DIR);
  }
  const notePath = path.join(NOTES_DIR, `${title}.md`);
  fs.writeFileSync(notePath, `# ${title}\n\n${content}`);
  logger.info(`Note "${title}" added.`);
}

module.exports = addNote;
