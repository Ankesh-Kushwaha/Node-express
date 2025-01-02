const express = require('express');
const {getAllBooks,getSingleBookbyID,addNewBook,updateBook,deleteBook}=require('../controllers/book-controller')

//create express router
const router = express.Router();

//create routes that are related to books only
router.get('/get',getAllBooks);
router.get('/get/:id',getSingleBookbyID);    //CRUD functionality ->create,Read, Update, Delete;
router.post('/add',addNewBook);
router.put('/update/:id',updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;