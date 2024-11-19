const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');
const NOTES_DIR = path.join(__dirname, '../notes');

function searchNotes(keyword) {
  if (!fs.existsSync(NOTES_DIR)) {
    logger.warn("No notes found.");
    return;
  }
  const files = fs.readdirSync(NOTES_DIR);
  const matches = files.filter(file => {
    const content = fs.readFileSync(path.join(NOTES_DIR, file), 'utf-8');
    return content.includes(keyword);
  });
  if (matches.length > 0) {
    logger.info(`Found ${matches.length} note(s) matching "${keyword}":`);
    matches.forEach(file => console.log(`- ${file.replace('.md', '')}`));
  } else {
    logger.warn(`No notes found matching "${keyword}".`);
  }
}

module.exports = searchNotes;
