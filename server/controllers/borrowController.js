const db = require('../config/db');

// Borrow a Book
exports.borrowBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const { book_id } = req.body;

    // Kontrollo nëse libri ekziston dhe ka kopje
    const [books] = await db.query(
      'SELECT * FROM books WHERE id = ?',
      [book_id]
    );

    if (books.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (books[0].available <= 0) {
      return res.status(400).json({ message: 'Book not available' });
    }


   // Insert borrow record
     await db.query(
       'INSERT INTO borrows (user_id, book_id, status, borrow_date) VALUES (?, ?, "borrowed", NOW())',
       [userId, book_id]
    );
    // Ule available
    await db.query(
      'UPDATE books SET available = available - 1 WHERE id = ?',
      [book_id]
    );

    res.status(201).json({ message: 'Book borrowed successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Return a Book
exports.returnBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const borrowId = req.params.id;

    // Gjej borrow
    const [borrows] = await db.query(
      'SELECT * FROM borrows WHERE id = ? AND user_id = ? AND status = "borrowed"',
      [borrowId, userId]
    );

    if (borrows.length === 0) {
      return res.status(404).json({ message: 'Borrow record not found' });
    }

    const bookId = borrows[0].book_id;

    // Ndrysho status
    await db.query(
      'UPDATE borrows SET status = "returned", return_date = NOW() WHERE id = ?',
      [borrowId]
    );

    // Rrit available
    await db.query(
      'UPDATE books SET available = available + 1 WHERE id = ?',
      [bookId]
    );

    res.json({ message: 'Book returned successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get My Borrows
exports.getMyBorrows = async (req, res) => {
  try {
    const userId = req.user.id;

    const [borrows] = await db.query(
      `SELECT borrows.*, books.title, books.author
       FROM borrows
       JOIN books ON borrows.book_id = books.id
       WHERE borrows.user_id = ?`,
      [userId]
    );

    res.json(borrows);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
