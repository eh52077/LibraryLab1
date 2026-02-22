const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  borrowBook,
  returnBook,
  getMyBorrows
} = require('../controllers/borrowController');

router.post('/', authMiddleware, borrowBook);
router.put('/:id', authMiddleware, returnBook);
router.get('/', authMiddleware, getMyBorrows);

module.exports = router;
