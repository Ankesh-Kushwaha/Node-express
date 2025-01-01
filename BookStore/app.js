const express = require('express');
const app = express();

//middleware
app.use(express.json());

let books = [
  {
    id: '1',
    title: 'book1'
  }
  , {
    id: '2',
    title: 'book2'
  }
];

//intro routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our bookstore',
   })
})

//get all books
app.get('/get', (req, res) => {
  res.send(books);
})

//get a single book
app.get('/get/:id', (req, res) => {
  const book = books.find(item => item.id === req.params.id);
  if (book) {
    res.json(book);
  }
  else {
    res.status(404).json({
      message: 'books not found! please try witha different id',
    })
  }
})

//post request
app.post('/add', (req, res) => {
  // Create a new book object
  const newBook = {
    id: (books.length + 1).toString(), // Generate a new ID as a string
    title: `Book ${books.length+1}`,
  };

  // Add the new book to the books array
  books.push(newBook);

  // Respond with the new book and a success message
  res.status(201).json({
    data: newBook,
    message: 'New book is added successfully',
  });
});


//update a book
app.put('/update/:id', (req, res) => {
  const findCurrentBook = books.find((item) => item.id === req.params.id);
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${req.params.id} updated successfully`,
      dta:findCurrentBook
    })
  }
  else {
    res.status(404).json({
        mmessage:'book not found',
     })
  }
})
app.delete('/delete/:id', (req, res) => {
  console.log(`Request received to delete book with id: ${req.params.id}`);
  const findIndexofCurr = books.findIndex((item) => item.id === req.params.id);
  console.log(`Found index: ${findIndexofCurr}`);
  if (findIndexofCurr !== -1) {
    const deletedBook = books.splice(findIndexofCurr, 1);
    console.log(`Deleted book:`, deletedBook);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    console.log('Book not found');
    res.status(404).json({
      message: 'Book not found',
    });
  }
});



const port = 3000;
app.listen(port, () => {
  console.log(`server is running at port:${port}`);
})