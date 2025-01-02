const Book=require('../models/Book')



const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: 'list of books fetched susscessfully!',
        data:allBooks,
        })
    }
    else {
      res.status(404).json({
        success: false,
        message:'no books found in the collections'
      })
    }
  }
  catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message:'Something went wrong try after some time !'
    })
  }
}

const getSingleBookbyID = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id; //id from the request side
    const bookDetailsbyId = await Book.findById(getCurrentBookId);
    if (!bookDetailsbyId) {
      return res.stauts(404).json({
        success: false,
        message:'Book with the current id does not found please try with different id'
       })
    }
    res.status(200).json({
      success: true,
      message: 'book  fetched sussccessfully!',
      data:bookDetailsbyId,
    })
  }
  catch (e) {
    console.log(e);
     res.status(500).json({
      success: false,
      message:'Something went wrong try after some time !'
    })
  }
}

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: 'Book added successfully',
        data: newlyCreatedBook,
       })
    }
  }
  catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message:'Something went wrong try after some time !'
    })
  }
}

const updateBook = async (req, res) => {
  try {
    const updatedBookFormdata = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(getCurrentBookId, updatedBookFormdata, {
      new: true,
       
    })
     if (!getCurrentBookId) {
      return res.status(404).json({
        success: false,
        message:'the book is not found with the provided id'
       })
    }
    res.status(202).json({
      success: true,
      message: 'book updated successfully with the given data!',
      data:updatedBook,
    })

  }
  catch (e) {
    console.log(e);
    res.stauts(500).json({
      success: false,
      message:'something went wrong'
    })
  }
}

const deleteBook = async (req, res) => {
  try {
    const getcurrentId = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(getcurrentId);
    if (!getcurrentId) {
      return res.status(404).json({
        success: false,
        message:'the book is not found with the provided id'
       })
    }
    res.status(202).json({
      success: true,
      message:'book deleted successfully with the given id!'
    })
  }
  catch(e) {
    console.log(e);
    res.stauts(500).json({
      success: false,
      message:'something went wrong'
    })
  }
}

module.exports = {
  getAllBooks,
  getSingleBookbyID,
  addNewBook,
  updateBook,
  deleteBook
}