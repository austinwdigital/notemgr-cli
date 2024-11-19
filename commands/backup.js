const fs = require('fs');
const path = require('path');
const axios = require('axios');
const logger = require('../utils/logger');
const { getConfig } = require('../utils/config');
const NOTES_DIR = path.join(__dirname, '../notes');
const CONFIG = getConfig();

async function backupNoteToGist(title, isPrivate) {
  const notePath = path.join(NOTES_DIR, `${title}.md`);
  if (!fs.existsSync(notePath)) {
    logger.error(`Note "${title}" not found.`);
    return;
  }
  const content = fs.readFileSync(notePath, 'utf-8');
  try {
    const response = await axios.post('https://api.github.com/gists', {
      files: { [`${title}.md`]: { content } },
      description: `Backup of note: ${title}`,
      public: !isPrivate
    }, {
      headers: { Authorization: `token ${CONFIG.githubToken}` }
    });
    logger.info(`Note "${title}" backed up successfully.`);
  } catch (error) {
    logger.error(`Error backing up note "${title}": ${error.message}`);
  }
}

module.exports = backupNoteToGist;
