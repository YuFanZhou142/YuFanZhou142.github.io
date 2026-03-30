# Yufan Zhou (Vann) Homepage

This repository contains the source code for my personal GitHub Pages website:

<https://yufanzhou142.github.io/>

## Overview

This site is a lightweight personal homepage built for academic and professional presentation. It introduces my background, current interests, selected projects, and contact information in a clean single-page layout.

## Features

- Simple static website with no build step required
- Clean academic-style layout with left-side navigation
- Personal profile section with photo and external links
- Project highlights for coursework and technical work
- GitHub Pages friendly deployment from the repository root

## Project Structure

```text
.
|-- index.html
|-- css/
|   `-- style.css
`-- assets/
    |-- vann1.jpg
    `-- avatar-placeholder.svg
```

## Local Preview

You can preview the site in either of these ways.

Open the file directly:

```powershell
start .\index.html
```

Or run a simple local server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Customization

To update the homepage in the future:

- Edit `index.html` to change the text content and section structure
- Edit `css/style.css` to adjust layout, colors, spacing, and typography
- Replace `assets/vann1.jpg` with a newer profile photo if needed
- Update project links, contact details, and external profiles as your portfolio grows

## Deployment

This website is deployed with GitHub Pages from the `main` branch of this repository.

After making changes locally, deploy updates with:

```powershell
git add -A
git commit -m "update homepage"
git push origin main
```

## Contact

- Email: <vannvann@stu.xmu.edu.cn>
- GitHub: <https://github.com/YuFanZhou142>
- ORCID: <https://orcid.org/0009-0006-8266-0839>
