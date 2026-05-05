# Yufan Zhou (Vann) Homepage

This repository contains the source code for my personal GitHub Pages website:

<https://yufanzhou142.github.io/>

## Overview

This site is a lightweight single-page academic homepage for Yufan Zhou (Vann), a 2023 undergraduate student majoring in Communication Engineering at the School of Informatics, Xiamen University (XMU).

The homepage presents:

- a profile section with photo and external links
- an `About Me` section with research interests
- a `News` section for recent updates
- a `Selected Papers` section with paper figure, title, authors, venue, and links
- an `Educations` section
- a `Competitions & Patents` section with supporting PDF files
- an `Achievements` section
- a `Misc` section for hobbies and personal interests

## Features

- Light / Dark mode toggle with localStorage persistence
- Visitor counter powered by [Busuanzi](https://busuanzi.ibruce.info/)
- Responsive layout (desktop sidebar + mobile hamburger-style nav)
- Paper cards with venue badge, figure, and collapsible abstract
- SEO meta tags (Open Graph + Twitter Card)

## Tech Stack

- Plain HTML and CSS (CSS custom properties for theming)
- No build step required
- GitHub Pages deployment from the repository root

## Project Structure

```text
.
├── index.html                  # Single-page homepage
├── README.md                   # This file
├── css/
│   └── style.css               # Stylesheet with light/dark theme variables
└── assets/
    ├── vann1.jpg               # Profile photo
    ├── vann.jpg                # Unused photo
    ├── avatar-placeholder.svg  # Fallback avatar SVG
    └── files/                  # Certificate PDFs
        ├── Certificate of Computer Software Copyright Registration.pdf
        ├── datang-cup-2025-proof.pdf
        ├── embedded-competition-2025-proof.pdf
        └── math-modeling-2025-proof.pdf
├── paper-fig/
│   └── icmr-ser/
│       ├── method.pdf          # Original paper figure (PDF)
│       └── method.png          # Converted PNG for web display
└── example/
    └── image.png               # Design reference screenshot
```

## Local Preview

Run a local server from the repository root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Updating Content

- edit `index.html` to update section content and links
- edit `css/style.css` to adjust layout, spacing, and typography (theme variables in `:root` and `[data-theme="dark"]`)
- replace `assets/vann1.jpg` if a newer profile photo is needed
- place new certificates or documents in `assets/files/`
- place new paper figures in `paper-fig/<paper-name>/`

## Deployment

This website is deployed with GitHub Pages from the `main` branch.

After updating the site:

```powershell
git add .
git commit -m "Update homepage content"
git push origin main
```

## Links

- Homepage: <https://yufanzhou142.github.io/>
- GitHub: <https://github.com/YuFanZhou142>
- X: <https://x.com/CrystalPer64291>
- ORCID: <https://orcid.org/0009-0006-8266-0839>
