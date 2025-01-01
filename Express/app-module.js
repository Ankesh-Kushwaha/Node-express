const express = require('express');
const app = express();


//application level settings

app.set('view engine', 'ejs');

//routing
app.get('/', (req, res) => {
  res.send('home page');
})

app.post('/api/data', (req, res) => {
  res.json({
    message: 'data received susseccfully',
    data:req.body
    })
})

app.use(err,req,res,next)