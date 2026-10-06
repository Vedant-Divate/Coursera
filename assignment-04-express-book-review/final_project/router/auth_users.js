const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

// Returns true when the username is still free (valid for registration)
const isValid = (username)=>{
  return !users.some((u) => u.username === username);
}

// Returns true when username/password match a registered user
const authenticatedUser = (username,password)=>{
  return users.some((u) => u.username === username && u.password === password);
}

// Only registered users can login
regd_users.post("/login", (req,res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const accessToken = jwt.sign({ username }, "access", { expiresIn: 60 * 60 });
  req.session.authorization = { accessToken, username };
  return res.status(200).json({ message: "User successfully logged in", token: accessToken });
});

// Add or modify a book review (logged-in users only)
// Body or query: { review: "text", username: "name" }
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const review = (req.body && req.body.review) || req.query.review;
  const username = (req.user && req.user.username)
    || (req.body && req.body.username)
    || req.query.username
    || (req.session.authorization && req.session.authorization.username);
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (!review || !username) {
    return res.status(400).json({ message: "Review text and username are required" });
  }
  books[isbn].reviews[username] = review;
  return res.status(200).json({ message: "Review added/modified successfully", reviews: books[isbn].reviews });
});

// Delete a book review (logged-in users only)
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = (req.user && req.user.username)
    || (req.body && req.body.username)
    || req.query.username
    || (req.session.authorization && req.session.authorization.username);
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (!username || !books[isbn].reviews[username]) {
    return res.status(404).json({ message: "Review not found for this user" });
  }
  delete books[isbn].reviews[username];
  return res.status(200).json({ message: "Review deleted successfully", reviews: books[isbn].reviews });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
