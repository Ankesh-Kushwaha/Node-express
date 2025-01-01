const express = require('express');
const app = express();

const requestTimeLogger = (req,res,next) => {
  const date = new Date().toISOString();
  console.log(`time is :${date} from ${req.method} to ${req.url}`);
  next();
}

app.use(requestTimeLogger);


app.get('/', (req,res) => {
  res.send('home page');
})

app.get('/about', (req,res) => {
  res.send('About page')
})

app.get('/products', (req, res) => {
  res.send('products page');
})

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening at the port number :${port}`);
})