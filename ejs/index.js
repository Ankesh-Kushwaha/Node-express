const express = require('express');
const path = require('path');

const app = express();
 

//set the view engine;
app.set('view engine', 'ejs');

//set the directory for the views
app.set('views', path.join(__dirname, 'views'));

const products = [
  {
    id: 1,
    name: 'products 1',
  }
  , {
    id: 2,
    name: 'products 2',
  }
  , {
    id: 3,
    name: 'products 3',
  },
  {
    id: 4,
    name: 'products 4',
  },
  {
    id: 5,
    name: 'products 5',
  }
  , {
    id: 6,
    name: 'products 6',
  }
];

app.get('/', (req, res) => {
  res.render('home', { title: 'Home', products: products });
})

app.get('/about', (req, res) => {
  res.render('about',{title:'About page'});
})




