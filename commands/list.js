const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');
const NOTES_DIR = path.join(__dirname, '../notes');

function listNotes() {
  if (!fs.existsSync(NOTES_DIR)) {
    logger.warn("No notes found.");
    return;
  }
  const files = fs.readdirSync(NOTES_DIR);
  if (files.length === 0) {
    logger.warn("No notes available.");
    return;
  }
  logger.info("Listing all notes:");
  files.forEach(file => console.log(`- ${file.replace('.md', '')}`));
}

module.exports = listNotes;

