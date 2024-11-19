# 📝 NoteMgr CLI

**NoteMgr CLI** is a lightweight command-line tool for managing personal notes. It allows you to create, tag, view, search, and sync Markdown-based notes with GitHub Gists, all from your terminal. Ideal for developers and knowledge workers, NoteMgr is modular, efficient, and easy to customize.

---

## 🌟 Features

- **Create and Organize Notes**: Quickly add and tag notes in Markdown format.
- **View Notes with Markdown Rendering**: Display notes in a terminal-friendly Markdown format.
- **Search Notes**: Find notes by keywords or tags.
- **Sync with GitHub Gists**: Automatically back up and update notes to GitHub, with options for public or private gists.
- **Real-Time Sync**: Watch for changes in your notes directory and sync updates automatically.
- **Configurable**: Customize privacy, notifications, and GitHub token settings via `config.json`.

---

## 💾 Installation

### Prerequisites

- Node.js (v14 or later)
- A GitHub account and personal access token with `gist` permissions

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/austinwdigital/notemgr-cli.git
   cd notemgr-cli
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install globally:

   ```bash
   npm install -g .
   ```

4. Set up `config.json`:

   ```bash
   cp config.example.json config.json
   ```

   Update `config.json` with your GitHub personal access token and preferences.

---

## 🚀 Usage

### General Syntax

```bash
notemgr <command> [options]
```

### Commands

| Command                      | Description                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------- |
| `add <title> <content>`      | Add a new note with a title and content.                                      |
| `list` / `ls`                | List all notes in the `notes/` directory.                                     |
| `tag <title> <tags...>`      | Add tags to an existing note.                                                 |
| `search <keyword>`           | Search for notes by a keyword or tag.                                         |
| `view <title>`               | Display a note with basic Markdown rendering.                                 |
| `backup <title> [--private]` | Backup a note to GitHub Gists. Add `--private` to create a private gist.      |
| `sync`                       | Watch for changes in the `notes/` directory and sync updates to GitHub Gists. |

---

## 👀 Examples

### Add a Note

```bash
notemgr add "Meeting Notes" "Discussed project roadmap and deadlines."
```

### Tag a Note

```bash
notemgr tag "Meeting Notes" "work" "roadmap" "2024"
```

### Search Notes

```bash
notemgr search "roadmap"
```

### View a Note

```bash
notemgr view "Meeting Notes"
```

### Backup a Note

```bash
notemgr backup "Meeting Notes" --private
```

### Sync Notes Automatically

```bash
notemgr sync
```

---

## ⚙️ Configuration

All settings are managed in the `config.json` file:

| Field                  | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `githubToken`          | Your GitHub personal access token with `gist` permissions. |
| `defaultPrivacy`       | Set default privacy for gists (`public` or `private`).     |
| `notificationsEnabled` | Enable or disable notifications (`true` or `false`).       |

Example `config.json`:

```json
{
  "githubToken": "YOUR_GITHUB_TOKEN",
  "defaultPrivacy": "public",
  "notificationsEnabled": true
}
```

---

## 🪵 Logging

All activity is logged in `notemgr.log`:

- **INFO**: Successful operations (e.g., commands executed, notes backed up).
- **WARNING**: Non-critical issues (e.g., no notes found).
- **ERROR**: Critical errors (e.g., failed backups).

---

## 💻 Development

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notemgr-cli.git
   cd notemgr-cli
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run locally:

   ```bash
   node notemgr.js <command> [options]
   ```

### Run Tests

_Tests can be added here if applicable._

---

## 👨‍💻 Author

This project was created by [@austinwdigital](https://github.com/austinwdigital).

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/new-feature
   ```

5. Submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👍 Acknowledgments

- Inspired by the need for efficient personal knowledge management.
- Thanks to the open-source community for providing tools and libraries.
