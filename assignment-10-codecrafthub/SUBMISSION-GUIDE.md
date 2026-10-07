# Assignment 10 – CodeCraftHub (Option B Python/Flask + dashboard)

Backend CRUD verified live (`curl-tests.txt`); dashboard E2E verified
(`dashboard.png`): rows render, edit prefills, delete works via API.

## Assessment answers (`frontend/dashboard.html`)

- **Q1 title tag:** `<title>CodeCraftHub - Personalized Learning Platform</title>`
- **Q2 `.btn-primary`:** indigo `#4f46e5` block (hover `#4338ca`)
- **Q3 `.btn-success`:** green `#16a34a` block (hover `#15803d`)
- **Q4 delete button:** `<button class="btn-danger" onclick="deleteCourse(...)">Delete</button>`
  + `deleteCourse()` using `fetch(API + '/' + id, { method: 'DELETE' })`

## Run

```bash
cd backend && pip install -r requirements.txt && python app.py  # :5000
# open frontend/dashboard.html in a browser
```

Committed locally on branch `assignment-10-codecrafthub`; `main` untouched.
