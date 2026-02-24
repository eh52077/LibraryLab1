const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware=require('../middleware/roleMiddleware');
const {
  createBook,
  getBooks,
  deleteBook,
  updateBook
} = require('../controllers/bookController');


router.post('/', authMiddleware, roleMiddleware('admin'),createBook);
router.delete('/:id', authMiddleware,roleMiddleware('admin'), deleteBook);
router.put('/:id', authMiddleware, roleMiddleware('admin'),updateBook);
router.get('/', authMiddleware, getBooks);

module.exports = router;
