# Assignment 01 – Single Page Portfolio Website

**Student:** Vedant Divate – 3rd year AI & Data Science, VIT Pune
**Stack:** HTML5, CSS, JavaScript – single-page responsive portfolio, no build step.

## Files (submit these to Coursera)
| Coursera Task | File to upload |
|---|---|
| Task 1 – index.html functionality | `index.html` |
| Task 2 – style.css styling | `style.css` |
| Task 3 – script.js functionality | `script.js` |
| Task 4 – screenshot | `functionality.png` |
| Task 5 – screenshot | `new_recommendation.png` |

## How grading maps to code
- **Top-left name:** `<div class="profile_name">Vedant Divate</div>` in `index.html`, styled in `style.css` (28px, bold, white). No “Jane Doe” anywhere.
- **Nav:** About Me, Skills, Project Details, Recommendations + Home icon `⌂` (`href="#top"`). `nav#home` + `body#top` so Home scrolls to top.
- **About Me:** `section#about-me` with `Hi, I'm Vedant Divate!` + personalized VIT summary + local image `profile.jpg`.
- **Skills (6 with logos):** HTML, CSS, JavaScript + NEW Python, React, Node.js – each `.skill` has `<img>` logo + `<h6>` + experience text.
- **Projects (3 new):** LogicLens, Football Video Analytics System, SameDrug – each `.project-card` with `<h3>` + bullets, links to https://github.com/Vedant-Divate.
- **Recommendations (3 new):** 3x `.recommendation` quotes, different from samples.
- **style.css hover:** `nav a:hover, .topmenu:hover { font-weight: bold; text-decoration: underline; }`
- **script.js:** `showPopup(show)` toggles `.popup.show`; called ONLY inside `addRecommendation()` after appending new `.recommendation`.

## Run locally
```powershell
cd assignment-01-single-page-portfolio
python -m http.server 8000
# open http://localhost:8000
```

## Screenshots
- `functionality.png` – full page: name, nav, profile, all skills with logos.
- `new_recommendation.png` – after submitting a recommendation: new card + “Thanks for leaving a recommendation!” popup.

Both were generated locally with Chrome headless (`puppeteer-core`) – see `/tmp/opencode/shot.js` if you need to regenerate.

## Notes
- All work kept local – no push to `main` / `origin`.
- No “Jane Doe” text remains.
- Responsive via flex + media query at 800px.
