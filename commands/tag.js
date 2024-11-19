const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');
const NOTES_DIR = path.join(__dirname, '../notes');

function tagNote(title, tags) {
  const notePath = path.join(NOTES_DIR, `${title}.md`);
  if (!fs.existsSync(notePath)) {
    logger.error(`Note "${title}" not found.`);
    return;
  }
  const noteContent = fs.readFileSync(notePath, 'utf-8');
  const updatedContent = `${noteContent}\n\nTags: ${tags.join(', ')}`;
  fs.writeFileSync(notePath, updatedContent);
  logger.info(`Tags added to "${title}": ${tags.join(', ')}`);
}

module.exports = tagNote;
