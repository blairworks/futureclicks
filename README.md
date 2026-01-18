# Futureclicks Dashboard

A curated, retro-inspired control panel for the tools shaping modern society.

Futureclicks is a launchpad designed for AI-first solo thinkers and independent workers. It provides a minimalist, keyboard-centric interface for accessing the essential tools of contemporary work, from AI models and design systems to research papers and governance standards.

## Features
- **Curated Toolsets**: Over 130 categorized links across AI, Dev, Design, Robotics, and Ethics.
- **Privacy First**: No accounts, no cookies, and no analytics. Your data is yours.
- **Local Pinning**: Save your most-used tools to the top of your dashboard using the star icon (persisted via `localStorage`).
- **Keyboard-Optimized**: High-speed navigation using arrow keys, 'Enter' to open, and 'P' to pin.

## Local Development

Futureclicks uses modern ES modules for simplicity and speed. Due to browser security restrictions, the dashboard **cannot** be opened directly via `file://` (double-clicking `index.html`).

To run it locally, use a development server of your choice:

```bash
# Using Python (recommended)
python -m http.server 5173

# Or using Node.js
npx serve .
```

Once the server is running, navigate to `http://localhost:5173`.

## Customizing Links

The tool links are managed in `js/data.js`. You can add or modify categories and links by editing this file. Each link requires a unique `id`, a `label`, and a `url`.

## Privacy & Tech Stack

This project is a pure static site built with vanilla HTML, CSS, and JavaScript. 
- **No Build Steps**: No npm installs or build pipelines required.
- **No Tracking**: No telemetry or third-party monitoring.
- **A Technosociology Project**: Built for independent work.

---
*Built for the tools shaping modern society.*
