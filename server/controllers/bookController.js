const db = require('../config/db');

// CREATE BOOK
exports.createBook = async (req, res) => {
  try {
    const { title, author, available } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: "Title and author required" });
    }

    const [result] = await db.query(
      "INSERT INTO books (title, author, available) VALUES (?, ?, ?)",
      [title, author, available || 1]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      author,
      available: available || 1
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating book' });
  }
};

// GET ALL BOOKS
exports.getBooks = async (req, res) => {
  try {
    const [books] = await db.query("SELECT * FROM books");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

// DELETE BOOK
exports.deleteBook = async (req, res) => {
  try {
    await db.query("DELETE FROM books WHERE id = ?", [req.params.id]);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};

// UPDATE BOOK
exports.updateBook = async (req, res) => {
  try {
    const { title, author, available } = req.body;

    await db.query(
      "UPDATE books SET title = ?, author = ?, available = ? WHERE id = ?",
      [title, author, available, req.params.id]
    );

    res.json({ message: 'Book updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
};