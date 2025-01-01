const express = require('express');
const app = express();

//define middleware function
const myfirstMiddleware = (req, res, next) => {
  console.log('this is the first middleware which we should call it at each level');
  next();
};


app.use(myfirstMiddleware);//use is use to show everywhere;

app.get('/', (req, res) => {
  res.send('Home Page');
})

app.get('/about', (req, res) => {
  res.send('About Page');
})

const port = 3000;
app.listen(port, () => {
  console.log(`server is running at the port :${port}`);
})

