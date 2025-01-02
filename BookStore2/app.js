require('dotenv').config()
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes=require('./routes/book-routes')

const app = express();

const PORT = process.env.PORT || 3000
//connect to our databse
connectToDB();

//middleware-> express which will parse json information
app.use(express.json());

//routes here  mounting the router over /api/books
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log('server is running at port 3000');
})
