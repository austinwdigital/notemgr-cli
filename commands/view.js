const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

const NOTES_DIR = path.join(__dirname, '../notes');

function renderMarkdown(content) {
  const lines = content.split('\n');
  for (let line of lines) {
    if (line.startsWith('# ')) console.log('\x1b[1m\x1b[4m%s\x1b[0m', line.slice(2)); // H1
    else if (line.startsWith('## ')) console.log('\x1b[1m%s\x1b[0m', line.slice(3)); // H2
    else if (line.startsWith('- ')) console.log('\x1b[33m%s\x1b[0m', `• ${line.slice(2)}`); // List
    else console.log(line);
  }
}

function viewNote(title) {
  const notePath = path.join(NOTES_DIR, `${title}.md`);
  if (!fs.existsSync(notePath)) {
    logger.error(`Note "${title}" not found.`);
    return;
  }
  const content = fs.readFileSync(notePath, 'utf-8');
  logger.info(`Viewing note: "${title}"`);
  renderMarkdown(content);
}

module.exports = viewNote;

