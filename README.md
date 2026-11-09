# Yufan(Vann) Zhou — 周于番 Homepage

Source code for the personal academic website of Yufan(Vann) Zhou — 周于番, a Communication Engineering undergraduate at the School of Informatics, Xiamen University.

- [Homepage](https://yufanzhou142.github.io/)
- [CV page](https://yufanzhou142.github.io/cv.html)
- [Blog](https://yufanzhou142.github.io/blog.html)

## Overview

The site is a static homepage with separate PDF CV and blog pages. It runs directly on GitHub Pages without a build step or package installation.

The homepage includes:

- Profile photo, contact details, and academic/social links (GitHub, X, ORCID, Google Scholar, LinkedIn)
- About Me, research interests, a planned PhD at HKUST(GZ) from Fall 2027, and availability for industrial research/foundation model internships and research collaborations
- A handwritten motto between the About Me notice and News, set in Caveat with a theme-blue left rule
- News with filtering by content or displayed date
- Publications grouped into First-Author, Co-Author, and Patent; the patent entry lists all inventors, its Chinese title, the English patent type, Patent No. ZL 2026 1 0206118.2, and the certificate PDF
- Paper entries with a venue badge, figure, authors, summary, and paper/code/video links
- The GS³-ICL Video link opens the presentation recording on YouTube (no start-time parameter)
- Educations and Research Intern
- Competitions & Others with supporting certificate PDFs
- Achievements, including the highlighted National Scholarship award proportion
- Services with Conference Reviewer and Journal Reviewer entries
- Misc for personal interests

Blog posts are not listed on the homepage; they live on the standalone `blog.html` page, which the sidebar opens.

## Features

- Sticky sidebar navigation on desktop; links wrap into a horizontal navigation area on smaller screens
- The sidebar starts at About Me with no separate Home entry; the profile block at the top of the page serves as the home view, and `#top` remains available as an anchor
- The sidebar panel carries no "Navigation" heading; its link list ends with Blogs, which opens the standalone `blog.html` page rather than jumping to a homepage section
- The blog page drops the sidebar entirely: a single centered column, a compact theme toggle beside the page title, and posts grouped under year labels
- Light and dark themes with `localStorage` persistence across the homepage, CV, and blog pages
- A **中文 / English** language switch beside the theme toggle on the Tarot article page; every page load starts in English
- Coordinated blue colors, readable news date labels, subtle shadows, and theme-aware red highlights
- A vector XMU emblem watermark in the profile area's upper-right corner, at **10% opacity** in both themes
- The emblem is hidden below **1140px viewport width** to leave room for profile text
- A scrollable news list with a text filter
- A profile image fallback if the portrait cannot load
- Embedded PDF preview, Open PDF, and Download actions on `cv.html`
- All CV actions use the current PDF in `cv/Yufan Zhou-Xiamen University.pdf`
- Open Graph and Twitter Card metadata

## Tech Stack

- Plain HTML, CSS, and JavaScript
- CSS custom properties for light/dark theme colors and decorative effects
- jQuery 3.7.1, loaded from a CDN, for the news filter
- MathJax 3.2.2, loaded from a CDN, for LaTeX math on article pages
- Crimson Pro, Caveat, and IBM Plex Mono fonts from Google Fonts
- GitHub Pages publishing from the root of the `main` branch

## Project Structure

```text
.
├── index.html                  # Homepage content, metadata, and inline scripts
├── cv.html                     # PDF CV viewer and download page
├── blog.html                   # Year archive of blog posts
├── posts/
│   └── vann-tarot1.html  # First post; doubles as the article template
├── favicon.svg                 # Site icon
├── robots.txt                  # Crawler rules and sitemap reference
├── sitemap.xml                 # URLs for the homepage, CV, blog, and post
├── google9add65054c8b58ca.html # Google site verification
├── README.md                   # Project documentation
├── AGENTS.md                   # Repository contribution guidelines
├── resume.md                   # Separately maintained text resume
├── cv/
│   └── Yufan Zhou-Xiamen University.pdf  # Current CV used by cv.html
├── css/
│   ├── style.css               # Shared layout, themes, and emblem watermark
│   ├── news.css                # News list and filter styles
│   └── blog.css                # Blog archive and article typography
├── js/
│   └── news-filter.js          # Filters news content and displayed dates
├── assets/
│   ├── vann1.jpg               # Active profile photo
│   ├── vann.jpg                # Alternate photo, currently unused
│   ├── avatar-placeholder.svg  # Profile image fallback
│   ├── xmu-emblem.svg          # Vector XMU emblem
│   ├── tarot-picture.webp      # Figure 1 image for the Tarot blog post
│   ├── cv/
│   │   └── Yufan_Zhou-Xiamen_University-2023.pdf  # Previous version; not used by cv.html
│   └── files/
│       ├── Certificate of Computer Software Copyright Registration.pdf
│       ├── chinese-invention-patent-2026-certificate.pdf
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

Open the [local homepage](http://127.0.0.1:8000/), the [local CV page](http://127.0.0.1:8000/cv.html), or the [local blog page](http://127.0.0.1:8000/blog.html). Use `Ctrl+C` in the server terminal to stop it.

The fonts and jQuery use external services and require network access.

## Updating Content and Appearance

| What to change | Where to edit |
| --- | --- |
| Profile, news, publications, experiences, awards, and Services | `index.html` |
| Shared layout, typography, colors, and shadows | `css/style.css` |
| News list and date label styles | `css/news.css` |
| News filtering behavior | `js/news-filter.js` |
| CV page layout and PDF links | `cv.html` |
| Blog post entries | `blog.html` |
| Blog archive, article typography, and post layout | `css/blog.css` |
| Post pages | `posts/` |
| Current downloadable CV | `cv/Yufan Zhou-Xiamen University.pdf` |
| Profile photo | `assets/vann1.jpg` |
| Certificate PDFs | `assets/files/` |
| Paper figures | `paper-fig/<paper-name>/` |
| Text resume | `resume.md` |

### Current CV and Version Management

`cv.html` is a standalone PDF CV viewer, reachable directly by URL. Its embedded preview, Open PDF button, and Download button all reference **`cv/Yufan Zhou-Xiamen University.pdf`**, the current published CV. The supplied PDF is published as-is; linking or deploying it does not rewrite its text or layout.

- Replace the PDF at that path to publish a new CV version, and include the PDF in the commit.
- If the file is renamed, update all three references in `cv.html`. Spaces in its URL are encoded as `%20`.
- `assets/cv/Yufan_Zhou-Xiamen_University-2023.pdf` is the previous version, retained at its existing URL for older direct links. It is not used by the current CV page.
- `resume.md` is a separately maintained text resume. Neither the homepage nor the PDF viewer renders it, and it is not automatically synchronized with the PDF.

Use `index.html` as the source for current homepage wording. Pull the latest `main` before editing locally so that changes made on GitHub are preserved.

### Blog Page

`blog.html` is a year archive opened from the sidebar entry **Blogs**; nothing about the blog appears on the homepage. The page has no sidebar: it is a single centered column, with a compact theme toggle beside the **Blogs** heading. Styles live in `css/blog.css`, shared with the article pages.

The `.blog-intro` paragraph is a personal welcome note rather than a topic summary: it describes collecting oddities and observations, and invites readers to email `vann.yufanzhou@gmail.com` about inaccuracies or questions. The sidebar entry, page heading, document title, and Open Graph / Twitter titles all read **Blogs**.

Posts sit under a year label, newest first within each year. Every entry carries the title, a `date · N min read` line, and a one-sentence excerpt:

```html
<section class="archive-year">
  <h2 class="archive-year-label">2026</h2>
  <ul class="archive-list">
    <li class="archive-item">
      <a class="archive-title" href="posts/my-post.html">Post title</a>
      <div class="archive-meta">Nov. 12, 2026 · 3 min read</div>
      <p class="archive-excerpt">One sentence on what the post covers.</p>
    </li>
  </ul>
</section>
```

The current 2026 entry points to `posts/vann-tarot1.html`:

- Title: **Why Can Tarot Generate Predictive Information Without Causal Power?**
- Meta: `Nov. 9, 2026 · 10 min read`
- Excerpt: "Mathematical Derivation of Synchronicity as the Underlying Principle of Tarot."
- Article page: same title and summary; the byline under the title reads **Vann**, and `Nov. 9, 2026` sits at the far right of the footer line, opposite the back link. The body is the full essay (Figure 1 tarot image, theorem, three numbered equations, six references, and a BibTeX citation block), with MathJax 3 loaded from cdnjs for LaTeX rendering. The published URL is `https://yufanzhou142.github.io/posts/vann-tarot1.html`.

The Tarot article has a language switch (globe icon) to the left of the dark-mode toggle. Its menu offers **中文** and **English**; the English text stays in the page as the source of truth and is never rewritten. The Chinese version (titled **为什么塔罗不具因果力，却能产生预测信息？**, author-refined in natural Chinese prose while keeping the exact same argument structure) is stored in an inert `<template id="article-zh">` and swapped into `.article-body` at runtime, along with the page title, both back links, and `html lang`. LaTeX equations, the six reference entries, the BibTeX block, the `Vann` byline, and the footer date are kept as in the English original; MathJax re-typesets the article body after each switch. Every page load starts in English; the switch only affects the current view and is not persisted (unlike the theme setting, which still uses `localStorage`).

To publish a post, copy `posts/vann-tarot1.html` and change its title, `description`, canonical URL, `.article-meta` line, and body; then add an `.archive-item` under the matching year in `blog.html`, creating a new `.archive-year` block when the year changes. Article pages reuse `.article-title`, `.article-meta`, and `.article-body` from `css/blog.css`, and link back to the archive through `.article-back`.

### Theme Colors and Highlights

Shared color variables are defined in `:root` and overridden in `[data-theme="dark"]` within `css/style.css`. News labels, paper badges, borders, and shadows use those variables.

Use `.text-accent` for red emphasis. It currently styles the industrial research/foundation model internship and collaboration notice, and the National Scholarship annotation displayed as `(Top 0.2%, the highest national merit honor for university students)` on the homepage. Each theme has its own red color.

Red is deliberately scoped to those two emphasis spots only. Everything structural, including links, headings, and the About Me motto's left rule, uses the blue `--link-color` and `--heading-color` variables instead.

### About Me Motto

The `.motto` paragraph sits between the closing About Me notice and the News heading in `index.html`. It is set in Caveat at `1.45rem`/`1.5`, colored with `--heading-color`, and marked by a `3px` left rule in `--link-color`.

`font-style: italic` is intentionally not set. Caveat already carries a handwritten slant, and adding italic produces a fake-looking double slant. If the Google Fonts request fails, the stack falls back to Segoe Script or Bradley Hand before the generic `cursive`, so the line still reads as handwriting rather than reverting to the body font.

The font size steps down to `1.22rem` below `768px` so the line does not wrap awkwardly on narrow screens.

### XMU Emblem Watermark

The watermark uses the [Xiamen University logo SVG from Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Xiamen_University_logo.svg), checked against the [official university identity page](https://www.xmu.edu.cn/sdgl/xxbs.htm). It contains vector paths and no embedded bitmap.

Its appearance is controlled by:

- `.intro-section::before`: placement and responsive size
- `--emblem-opacity`: currently `0.10` in both themes
- `--emblem-filter` and `--emblem-blend`: theme-specific rendering
- The `max-width: 1139px` media query: hides the watermark on narrower screens

The emblem is a decorative CSS background and does not intercept clicks or change the profile layout.

## Checks Before Publishing

There is no automated test framework. Preview relevant changes in a browser:

- Desktop and narrow mobile layouts, in both light and dark themes
- Theme persistence after refreshing and switching between the homepage and CV
- Section navigation, news filtering, paper/code/video links, and external links
- Images, the portrait fallback, certificate PDFs, and CV open/download actions
- Before/after screenshots for visual changes and the browser console for new errors

Before committing:

```powershell
git diff --check
git status --short
git diff
```

## Deployment

GitHub Pages publishes the repository root from `main`. With a clean working tree, synchronize the local checkout before editing:

```powershell
git switch main
git pull --ff-only origin main
```

After editing and running the checks above, stage the intended files, including the current PDF when it changes. For a combined homepage, styling, CV, and documentation update:

```powershell
git add index.html cv.html blog.html css/style.css css/news.css js/news-filter.js assets/xmu-emblem.svg "cv/Yufan Zhou-Xiamen University.pdf" README.md
git diff --cached --check
git commit -m "Update homepage, CV, and documentation"
git push origin main
```

If GitHub receives another commit before the push, fetch and integrate those changes before pushing again. Preserve remote content edits when resolving any conflicts.

GitHub Pages deployment starts after the push; publishing can take a few minutes. Confirm that **pages build and deployment** succeeds in GitHub Actions, then check the live homepage's links and the CV preview/download. Run `git status --short --branch` to confirm the local checkout is clean and synchronized with `origin/main`.

## Links

- [Homepage](https://yufanzhou142.github.io/)
- [CV](https://yufanzhou142.github.io/cv.html)
- [Blog](https://yufanzhou142.github.io/blog.html)
- [GitHub](https://github.com/YuFanZhou142)
- [LinkedIn](https://www.linkedin.com/in/yufan-zhou-042987370/)
- [Google Scholar](https://scholar.google.com/citations?user=rvM9Z9IAAAAJ&hl=zh-CN)
- [X](https://x.com/vannvann142)
- [ORCID](https://orcid.org/0009-0006-8266-0839)
