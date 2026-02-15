const express = require('express');
const router = express.Router();
const {
  createBook,
  getBooks,
  deleteBook,
  updateBook
} = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createBook);
router.get('/', authMiddleware, getBooks);
router.delete('/:id', authMiddleware, deleteBook);
router.put('/:id', authMiddleware, updateBook);

module.exports = router;
