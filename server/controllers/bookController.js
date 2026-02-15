const Book = require('../models/Book');

// CREATE BOOK
exports.createBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;

    const book = new Book({
      title,
      author,
      year,
      user: req.user.id
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook);

  } catch (error) {
    res.status(500).json({ message: 'Error creating book' });
  }
};

// GET ALL BOOKS
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

// DELETE BOOK
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};

// UPDATE BOOK
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
};
