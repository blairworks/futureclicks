# Futureclicks Dashboard

A vibe-coded, retro-inspired dashboard for AI-first solo entrepreneurs.

## Features
- **Curated Links**: Categorized resources for AI, Design, Dev, and more.
- **Pinning**: Save your most-used tools to the top (localStorage).
- **Retro Aesthetic**: "Humane retro" theme inspired by early personal computing.
- **Keyboard First**: Navigate with arrows, pin with 'P', open with 'Enter'.

## Tech Stack
- Vanilla HTML/CSS/JS
- No build tools
- Hosted on Cloudflare Pages (suggested)

## Local Development

Futureclicks uses modern ES modules. Due to browser security restrictions, it **cannot** be opened directly via `file://` (double-clicking `index.html`).

To run it locally, use a local development server:

```bash
# Using Python (recommended)
python -m http.server 5173

# Or using Node.js (if installed)
npx serve .
```

Then open `http://localhost:5173` (or the port provided) in your browser.
