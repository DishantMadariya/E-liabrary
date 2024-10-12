const Book = require('../models/Book');

module.exports.createBook = async (req, res) => {
    const { title, author, genre } = req.body;
    try {
        const newBook = new Book({ title, author, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: "Error adding book", error });
    }
};

module.exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(400).json({ message: "Error fetching books", error });
    }
};

module.exports.updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: "Error updating book", error });
    }
};

module.exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.json({ message: "Book deleted" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting book", error });
    }
};

module.exports.borrowBook = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
        const book = await Book.findById(id);
        if (!book.availability) return res.status(400).json({ message: "Book already borrowed" });

        book.availability = false;
        book.borrowedBy = userId;
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: "Error borrowing book", error });
    }
};

module.exports.returnBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        book.availability = true;
        book.borrowedBy = null;
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: "Error returning book", error });
    }
};
