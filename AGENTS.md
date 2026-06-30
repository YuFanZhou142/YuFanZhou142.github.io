# Repository Guidelines

## Project Structure & Module Organization

This repository is a build-free, single-page GitHub Pages site. `index.html` contains the page structure, content, metadata, and small client-side behaviors. Global styling, responsive rules, and light/dark theme variables live in `css/style.css`. Store profile images and downloadable documents under `assets/`; certificates belong in `assets/files/`. Paper-specific figures go in `paper-fig/<paper-slug>/`, such as `paper-fig/icmr-ser/method.png`. `resume.md` holds the text resume, while `README.md` documents the public project.

## Build, Test, and Development Commands

No package installation or compilation is required. From the repository root, run:

```powershell
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000/`. Serving over HTTP is preferable to opening `index.html` directly because it mirrors GitHub Pages asset loading. Before committing, run `git diff --check` to catch whitespace errors and `git status --short` to confirm the intended files are included. Deployment occurs automatically from the `main` branch through GitHub Pages.

## Coding Style & Naming Conventions

Use two-space indentation in HTML and CSS. Keep HTML semantic and organize content into `<section>` blocks with stable, lowercase IDs used by side-navigation anchors. Use kebab-case for CSS classes and asset names (`paper-box-image`, `avatar-placeholder.svg`). Reuse CSS custom properties from `:root` and `[data-theme="dark"]` instead of introducing isolated colors. Add descriptive `alt` text to images and use `rel="noreferrer noopener"` on new external links opened in another tab.

## Testing Guidelines

There is no automated test framework or coverage requirement. Manually verify desktop and narrow mobile layouts, navigation anchors, external and PDF links, image fallbacks, the visitor counter, and theme toggling with persistence after refresh. Check both light and dark themes. For visual changes, compare before-and-after screenshots and ensure the browser console has no new errors.

## Commit & Pull Request Guidelines

Recent commits use short, imperative subjects beginning with verbs such as `Add`, `Fix`, `Update`, `Rename`, or `Restyle`. Keep each commit focused; for example, `Fix mobile navigation spacing`. Pull requests should summarize the user-visible change, list manual checks performed, link any relevant issue, and include desktop and mobile screenshots for layout or styling changes. Do not commit secrets, analytics credentials, generated local files, or unrelated binary assets.
