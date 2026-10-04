# Yufan Zhou (Vann) Homepage

Source code for the personal academic website of Yufan Zhou (Vann), a Communication Engineering undergraduate at the School of Informatics, Xiamen University.

- [Homepage](https://yufanzhou142.github.io/)
- [CV page](https://yufanzhou142.github.io/cv.html)

## Overview

The site is a static homepage with a separate PDF CV viewer. It runs directly on GitHub Pages without a build step or package installation.

The homepage includes:

- Profile photo, contact details, and academic/social links
- About Me and research interests
- News with filtering by content or displayed date
- Selected Papers with a venue badge, figure, authors, summary, and paper/code links
- Educations and Research Intern
- Competitions & Patents with supporting certificate PDFs
- Achievements, including the highlighted National Scholarship award proportion
- Services with Conference Reviewer and Journal Reviewer entries
- Misc for personal interests

## Features

- Sticky sidebar navigation on desktop; links wrap into a horizontal navigation area on smaller screens
- Light and dark themes with `localStorage` persistence on both the homepage and CV page
- Coordinated blue colors, readable news date labels, subtle shadows, and theme-aware red highlights
- A vector XMU emblem watermark in the profile area's upper-right corner, at **17% opacity** in both themes
- The emblem is hidden below **1140px viewport width** to leave room for profile text
- A scrollable news list with a text filter
- A profile image fallback if the portrait cannot load
- Visitor page-view counter powered by [Busuanzi](https://busuanzi.ibruce.info/)
- Embedded PDF preview, Open PDF, and Download actions on `cv.html`
- Open Graph and Twitter Card metadata

## Tech Stack

- Plain HTML, CSS, and JavaScript
- CSS custom properties for light/dark theme colors and decorative effects
- jQuery 3.7.1, loaded from a CDN, for the news filter
- Crimson Pro and IBM Plex Mono fonts from Google Fonts
- GitHub Pages publishing from the root of the `main` branch

## Project Structure

```text
.
├── index.html                  # Homepage content, metadata, and inline scripts
├── cv.html                     # PDF CV viewer and download page
├── favicon.svg                 # Site icon
├── README.md                   # Project documentation
├── AGENTS.md                   # Repository contribution guidelines
├── resume.md                   # Separately maintained text resume
├── css/
│   ├── style.css               # Shared layout, themes, and emblem watermark
│   └── news.css                # News list and filter styles
├── js/
│   └── news-filter.js          # Filters news content and displayed dates
├── assets/
│   ├── vann1.jpg               # Active profile photo
│   ├── vann.jpg                # Alternate photo, currently unused
│   ├── avatar-placeholder.svg  # Profile image fallback
│   ├── xmu-emblem.svg          # Vector XMU emblem
│   ├── cv/
│   │   └── Yufan_Zhou-Xiamen_University-2023.pdf
│   └── files/
│       ├── Certificate of Computer Software Copyright Registration.pdf
│       ├── datang-cup-2025-proof.pdf
│       ├── embedded-competition-2025-proof.pdf
│       └── math-modeling-2025-proof.pdf
└── paper-fig/
    └── icmr-ser/
        └── method.png          # Paper method figure
```

## Local Preview

With Python 3 available on your PATH, run from the repository root:

```powershell
python -m http.server 8000
```

On Windows, `py -m http.server 8000` also works if the Python launcher is installed. Any static HTTP server can be used instead.

Open the [local homepage](http://127.0.0.1:8000/) or the [local CV page](http://127.0.0.1:8000/cv.html). Use `Ctrl+C` in the server terminal to stop it.

The fonts, jQuery, and visitor counter use external services and require network access.

## Updating Content and Appearance

| What to change | Where to edit |
| --- | --- |
| Profile, news, papers, experiences, awards, and Services | `index.html` |
| Shared layout, typography, colors, and shadows | `css/style.css` |
| News list and date label styles | `css/news.css` |
| News filtering behavior | `js/news-filter.js` |
| CV page layout and PDF links | `cv.html` |
| Downloadable CV | `assets/cv/` |
| Profile photo | `assets/vann1.jpg` |
| Certificate PDFs | `assets/files/` |
| Paper figures | `paper-fig/<paper-name>/` |
| Text resume | `resume.md` |

The homepage, text resume, and PDF CV are maintained separately; update each relevant version when personal information changes.

### Theme Colors and Highlights

Shared color variables are defined in `:root` and overridden in `[data-theme="dark"]` within `css/style.css`. News labels, paper badges, borders, and shadows use those variables.

Use `.text-accent` for red emphasis. It currently styles the PhD opportunity notice and the `(Top 0.5%)` National Scholarship annotation, with a separate red color for each theme.

### XMU Emblem Watermark

The watermark uses the [Xiamen University logo SVG from Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Xiamen_University_logo.svg), checked against the [official university identity page](https://www.xmu.edu.cn/sdgl/xxbs.htm). It contains vector paths and no embedded bitmap.

Its appearance is controlled by:

- `.intro-section::before`: placement and responsive size
- `--emblem-opacity`: currently `0.17` in both themes
- `--emblem-filter` and `--emblem-blend`: theme-specific rendering
- The `max-width: 1139px` media query: hides the watermark on narrower screens

The emblem is a decorative CSS background and does not intercept clicks or change the profile layout.

## Checks Before Publishing

There is no automated test framework. Preview relevant changes in a browser:

- Desktop and narrow mobile layouts, in both light and dark themes
- Theme persistence after refreshing and switching between the homepage and CV
- Section navigation, news filtering, and external links
- Images, the portrait fallback, certificate PDFs, and CV open/download actions
- The visitor counter when its external service is available
- Before/after screenshots for visual changes and the browser console for new errors

Before committing:

```powershell
git diff --check
git status --short
git diff
```

## Deployment

GitHub Pages publishes the repository root from `main`. Stage the files you intend to publish, including any newly added assets, then commit and push.

For the homepage, styling, and emblem changes, for example:

```powershell
git add index.html cv.html css/style.css css/news.css assets/xmu-emblem.svg README.md
git commit -m "Update homepage styling and documentation"
git push origin main
```

GitHub Pages deployment starts after the push; publishing the updated website can take a few minutes.

## Links

- [Homepage](https://yufanzhou142.github.io/)
- [CV](https://yufanzhou142.github.io/cv.html)
- [GitHub](https://github.com/YuFanZhou142)
- [Google Scholar](https://scholar.google.com/citations?user=rvM9Z9IAAAAJ&hl=zh-CN)
- [X](https://x.com/vannvann142)
- [ORCID](https://orcid.org/0009-0006-8266-0839)
