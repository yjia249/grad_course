# Soft Matter and Biophysics Course Site

Multi-page static website for your graduate course.

## Current structure
- `index.html`: homepage and lecture navigation
- `styles.css`: shared style for all pages
- `lectures/glass-transition.html`: completed Lecture 1 page
- `lectures/template.html`: reusable lecture template for Lecture 2-15
- `soft_matter_biophysics_course_site.jsx`: original draft component (kept unchanged)

## Built-in teaching helpers
- Inline keyword popups (`.keyword` + `.tooltip`) for hover/focus definitions
- `Concept Glossary` panel inside lecture pages for quick lookup
- `Recommended Reading` panels on homepage and inside lecture pages

## Preview locally
```bash
cd /Users/yjia/Documents/Documents_iMac/grad_course
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## Add a new lecture page (recommended workflow)
1. Copy template:
```bash
cp lectures/template.html lectures/rheology.html
```
2. Edit `lectures/rheology.html` and replace:
- Lecture number and topic name
- Paper citation and DOI
- Big question
- 90-minute timeline
- What to calculate first
- Main teaching points
- Discussion prompts
- Keyword popup text (`Definition` + `Why it matters`)
- Concept glossary entries
- Topic reading list entries

3. Add link in `index.html` under `Lecture Pages`:
```html
<a class="lecture-link" href="lectures/rheology.html">Lecture 2. Rheology (Author et al., Year)</a>
```

## Publish for students (GitHub Pages)
1. Push this folder to a GitHub repository.
2. Go to `Settings -> Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Choose `main` and `/ (root)`.
5. Save; wait 1-3 minutes for the public URL.

## In-class usage
- Keep one tab on the lecture page and one tab on the PDF.
- Follow timeline blocks and use discussion prompts in the last 10 minutes.
