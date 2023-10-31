const express = require("express");
const { addBooks,getAllBooks,getSingleBook,updateBook,deleteBook } = require("../controller/booksController");

const router = express.Router();

router.route("/add/new/books").post(addBooks);
router.route("/get/all/books").get(getAllBooks);
router.route("/get/single/books/:id").get(getSingleBook);
router.route("/update/books/:id").put(updateBook);
router.route("/delete/books/:id").put(deleteBook);





module.exports = router;
