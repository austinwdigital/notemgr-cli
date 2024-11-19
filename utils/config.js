const fs = require('fs');
const path = require('path');

function getConfig() {
  const configPath = path.join(__dirname, '../config.json');
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

module.exports = { getConfig };
