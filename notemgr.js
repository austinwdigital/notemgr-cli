#!/usr/bin/env node

const logger = require('./utils/logger');
const addNote = require('./commands/add');
const listNotes = require('./commands/list');
const tagNote = require('./commands/tag');
const searchNotes = require('./commands/search');
const viewNote = require('./commands/view');
const backupNote = require('./commands/backup');
const syncNotes = require('./syncNotes');

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

try {
  switch (command) {
    case 'add':
      const title = options[0];
      const content = options.slice(1).join(' ');
      if (title && content) {
        logger.info(`Executing command: add "${title}"`);
        addNote(title, content);
      } else {
        logger.error("Invalid usage of 'add' command");
        console.error("Usage: notemgr add <title> <content>");
      }
      break;

    case 'list':
    case 'ls':
      logger.info("Executing command: list");
      listNotes();
      break;

    case 'tag':
      const tagTitle = options[0];
      const tags = options.slice(1);
      if (tagTitle && tags.length > 0) {
        logger.info(`Executing command: tag "${tagTitle}" with tags [${tags.join(', ')}]`);
        tagNote(tagTitle, tags);
      } else {
        logger.error("Invalid usage of 'tag' command");
        console.error("Usage: notemgr tag <title> <tags...>");
      }
      break;

    case 'search':
      const keyword = options[0];
      if (keyword) {
        logger.info(`Executing command: search for "${keyword}"`);
        searchNotes(keyword);
      } else {
        logger.error("Invalid usage of 'search' command");
        console.error("Usage: notemgr search <keyword>");
      }
      break;

    case 'view':
      const viewTitle = options[0];
      if (viewTitle) {
        logger.info(`Executing command: view "${viewTitle}"`);
        viewNote(viewTitle);
      } else {
        logger.error("Invalid usage of 'view' command");
        console.error("Usage: notemgr view <title>");
      }
      break;

    case 'backup':
      const backupTitle = options[0];
      const isPrivate = options.includes('--private');
      if (backupTitle) {
        logger.info(`Executing command: backup "${backupTitle}" (private: ${isPrivate})`);
        backupNote(backupTitle, isPrivate);
      } else {
        logger.error("Invalid usage of 'backup' command");
        console.error("Usage: notemgr backup <title> [--private]");
      }
      break;

    case 'sync':
      logger.info("Executing command: sync");
      syncNotes();
      break;

    default:
      logger.error(`Invalid command: "${command}"`);
      console.error("Usage: notemgr <command> [options]");
      console.error("Available commands: add, list, tag, search, view, backup, sync");
      break;
  }
} catch (error) {
  logger.error(`Error executing command: ${error.message}`);
  console.error(`An error occurred: ${error.message}`);
}

