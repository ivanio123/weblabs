const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getBooks);
router.get('/item/:id', bookController.getBook);
router.get('/privacy', bookController.getPrivacy);
router.get('/about', bookController.getAbout);
router.get('/create', bookController.createBookForm);
router.post('/create', bookController.createBook);

module.exports = router;
