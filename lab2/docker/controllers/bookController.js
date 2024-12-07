const BookModel = require('../models/bookModel');

exports.getBooks = (req, res) => {
    const books = BookModel.getAllBooks();
    res.render('bookListView', { books });
};

exports.getBook = (req, res) => {
    const books = BookModel.getAllBooks();
    const id = req.params['id'];
    const book = books.find(x => x.id == id);
    res.render('bookView', { book });
};

exports.getPrivacy = (req, res) => {
    res.render('privacyView');
};

exports.getAbout = (req, res) => {
    res.render('aboutView');
};

exports.createBookForm = (req, res) => {
    res.render('createBookForm');
};
exports.createBook = (req, res) => {
    const { name, description } = req.body;
    const newBook = { id: Date.now(), name, description };
    BookModel.addBook(newBook);
    res.redirect('/');
};
