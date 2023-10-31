const Book = require("../models/booksModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError")
const ApiFeatures = require("../utils/apifeatures")



//ADD BOOKS
exports.addBooks = catchAsyncError(async (req, res, next) => {
    const booksData = req.body;
    const book = await Book.create(booksData);

    res.status(201).json({
        success: true,
        book
    })
});

//get All BOOKS

exports.getAllBooks = catchAsyncError(async (req, res) => {

    const resultPerPage = 5;
    const bookCount = await Book.countDocuments();
    const apifeatures = new ApiFeatures(Book.find(), req.query)
        .pagination(resultPerPage)
    const book = await apifeatures.query;
    res.status(200).json({
        success: true,
        book,
        bookCount
    })
});

//GET SINGLE BOOK
exports.getSingleBook = catchAsyncError(async (req, res, next) => {
    const bookData = await Book.findById(req.params.id);
    if (!bookData) {
        return next(new ErrorHander("Book not found", 404));
    }

    res.status(200).json({
        success: true,
        bookData,
        
    })

})

//update BooK 
exports.updateBook = catchAsyncError(async (req, res, next) => {
    let bookData = await Book.findById(req.params.id);

    if (!bookData) {
        return next(new ErrorHander("Book not found", 404));
    }

    bookData = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        bookData
    })
});

//Delete Book

exports.deleteBook = catchAsyncError(async (req, res, next) => {
    const bookData = await Book.findById(req.params.id);
    if (!bookData) {
        return next(new ErrorHander("Book not found", 404));
    }
    await bookData.remove();

    res.status(200).json({
        success: true,
        message: "Book deleted successfully"
    })

});
