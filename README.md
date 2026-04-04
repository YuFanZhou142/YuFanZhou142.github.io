# Yufan Zhou (Vann) Homepage

This repository contains the source code for my personal GitHub Pages website:

<https://yufanzhou142.github.io/>

## Overview

This site is a lightweight single-page academic homepage for Yufan Zhou (Vann), a 2023 undergraduate student majoring in Communication Engineering at the School of Informatics, Xiamen University (XMU).

The homepage currently presents:

- a profile section with photo and external links
- an `About Me` section with research interests
- a `News` section for recent updates
- a `Selected Papers` section
- an `Educations` section
- a `Competitions` section with supporting PDF files
- a `Misc` section for hobbies and personal interests

## Tech Stack

- Plain HTML and CSS
- No build step required
- GitHub Pages deployment from the repository root

## Project Structure

```text
.
|-- index.html
|-- README.md
|-- css/
|   `-- style.css
`-- assets/
    |-- vann1.jpg
    |-- vann.jpg
    |-- avatar-placeholder.svg
    `-- files/
        |-- datang-cup-2025-proof.pdf
        |-- embedded-competition-2025-proof.pdf
        `-- math-modeling-2025-proof.pdf
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

To customize the homepage in the future:

- edit `index.html` to update section content and links
- edit `css/style.css` to adjust layout, width, spacing, and typography
- replace `assets/vann1.jpg` if a newer profile photo is needed
- place new supporting certificates or documents in `assets/files/`

## Deployment

This website is deployed with GitHub Pages from the `main` branch.

After updating the site:

```powershell
git add README.md index.html css/style.css assets/files
git commit -m "Update homepage content"
git push origin main
```

## Links

- Homepage: <https://yufanzhou142.github.io/>
- GitHub: <https://github.com/YuFanZhou142>
- X: <https://x.com/CrystalPer64291>
- ORCID: <https://orcid.org/0009-0006-8266-0839>
