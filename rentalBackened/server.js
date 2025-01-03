const express = require('express');
const connectToDB = require('./database/db');
const productsRouter = require('./routes/route');


const app = express();

const PORT = 3000;
//connect to our databse
connectToDB();

//middleware-> express which will parse json information
app.use(express.json());

//routes here  mounting the router over /api/books
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log('server is running at port 3000');
})
