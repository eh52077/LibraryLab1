const db = require('../config/db');

// Get all books
exports.getAllBooks = async () => {
  const [rows] = await db.query('SELECT * FROM books');
  return rows;
};

// Get single book by ID
exports.getBookById = async (id) => {
  const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
  return rows[0];
};

// Create book
exports.createBook = async (title, author, year, user_id) => {
  const [result] = await db.query(
    'INSERT INTO books (title, author, year, user_id) VALUES (?, ?, ?, ?)',
    [title, author, year, user_id]
  );
  return result;
};

// Update book
exports.updateBook = async (id, title, author, year) => {
  const [result] = await db.query(
    'UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?',
    [title, author, year, id]
  );
  return result;
};

// Delete book
exports.deleteBook = async (id) => {
  const [result] = await db.query(
    'DELETE FROM books WHERE id = ?',
    [id]
  );
  return result;
};
