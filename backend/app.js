const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

const errorMiddleWare = require("./middleware/error") 

app.use(express.json());
app.use(cookieParser())


//Route Imports
const books = require("./routes/booksRoute");




app.use("/api/v1", books);




//MiddleWare for Error
app.use(errorMiddleWare);

module.exports = app;
