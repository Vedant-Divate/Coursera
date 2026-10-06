# Assignment 04 – Express Book Review Backend (30 pts)

Node + Express bookshop in `final_project/` (pushed to fork
https://github.com/Vedant-Divate/expressBookReviews, forked from
ibm-developer-skills-network/expressBookReviews).

## Implementation (`final_project/`)

- `index.js` – JWT auth middleware for `/customer/auth/*` (session token, `access` secret)
- `router/auth_users.js` – `isValid`, `authenticatedUser`, `POST /customer/login` (JWT),
  `PUT /customer/auth/review/:isbn` (add/modify), `DELETE /customer/auth/review/:isbn`
- `router/general.js` – `POST /register`, `GET /`, `/isbn/:isbn`, `/author/:author`,
  `/title/:title`, `/review/:isbn` + Axios async/await client
  (`getAllBooks`, `getBookByISBN`, `getBooksByAuthor`, `getBooksByTitle`, promise `.then/.catch` variant)
- `router/booksdb.js` – data source, unchanged (10 books)

Run: `npm install && node index.js` (port 5000).

## Coursera submission

Tasks 1–10: paste contents of these files (each holds `$ curl …` + real output):

| Task | File |
|---|---|
| 1 – forked repo (2) | `githubrepo` |
| 2 – all books (2) | `getallbooks` |
| 3 – by ISBN (2) | `getbooksbyISBN` |
| 4 – by author (2) | `getbooksbyauthor` |
| 5 – by title (2) | `getbooksbytitle` |
| 6 – initial review (2) | `getbookreview` |
| 7 – register (3) | `register` |
| 8 – login (3) | `login` |
| 9 – review added (2) | `reviewadded` |
| 10 – review deleted (2) | `deletereview` |

Task 11 – general.js URL (8):
https://github.com/Vedant-Divate/expressBookReviews/blob/main/final_project/router/general.js

Committed locally on branch `assignment-04-express-book-review`; Coursera `main` untouched, nothing pushed there.
