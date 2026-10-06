const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const axios = require('axios');
const public_users = express.Router();

// Register a new user
public_users.post("/register", (req,res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (!isValid(username)) {
    return res.status(404).json({ message: "User already exists!" });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User successfully registered. Now you can login" });
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const book = books[req.params.isbn];
  if (book) {
    return res.status(200).json(book);
  }
  return res.status(404).json({ message: "Book not found" });
 });

// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const matches = Object.values(books).filter((b) => b.author === req.params.author);
  if (matches.length > 0) {
    return res.status(200).json(matches);
  }
  return res.status(404).json({ message: "No books found for this author" });
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const matches = Object.values(books).filter((b) => b.title === req.params.title);
  if (matches.length > 0) {
    return res.status(200).json(matches);
  }
  return res.status(404).json({ message: "No books found with this title" });
});

// Get book review
public_users.get('/review/:isbn',function (req, res) {
  const book = books[req.params.isbn];
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json(book.reviews);
});

// ---------------------------------------------------------------------------
// Axios client: retrieve books via async/await (Tasks 10-13 style).
// These helpers call the running server at BASE_URL and return the data.
// Run demos with: node router/general.js  (server must be running on :5000)
// ---------------------------------------------------------------------------
const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

// 10. Get all books using async/await with Axios
async function getAllBooks() {
  try {
    const response = await axios.get(BASE_URL + '/');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books: ' + error.message);
  }
}

// 11. Get book details by ISBN using async/await with Axios
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch book ${isbn}: ` + error.message);
  }
}

// 12. Get book details by author using async/await with Axios
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch books by ${author}: ` + error.message);
  }
}

// 13. Get book details by title using async/await with Axios
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch books titled ${title}: ` + error.message);
  }
}

// Same lookups expressed with promise callbacks (.then/.catch)
function getAllBooksPromise() {
  return axios.get(BASE_URL + '/')
    .then((response) => response.data)
    .catch((error) => { throw new Error('Failed to fetch books: ' + error.message); });
}

// Demo runner (only when executed directly, never on server require)
if (require.main === module) {
  (async () => {
    console.log('All books:', JSON.stringify(await getAllBooks(), null, 2));
    console.log('ISBN 1:', JSON.stringify(await getBookByISBN(1), null, 2));
    console.log('By author:', JSON.stringify(await getBooksByAuthor('Jane Austen'), null, 2));
    console.log('By title:', JSON.stringify(await getBooksByTitle('Things Fall Apart'), null, 2));
  })().catch((e) => { console.error(e.message); process.exit(1); });
}

module.exports.general = public_users;
module.exports.getAllBooks = getAllBooks;
module.exports.getBookByISBN = getBookByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;
