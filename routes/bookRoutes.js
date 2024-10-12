const express = require('express');
const bookcontroller = require('../controllers/bookcontroller');

const router = express.Router();

router.post('/', bookcontroller.createBook);
router.get('/', bookcontroller.getBooks);
router.put('/:id', bookcontroller.updateBook);
router.delete('/:id', bookcontroller.deleteBook);
router.post('/borrow/:id', bookcontroller.borrowBook);
router.post('/return/:id', bookcontroller.returnBook);

module.exports = router;
