console.log('Starting server...');
const express = require('express');
const app = express();

//root route;
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.send('Welcome to the home page');
});

//product route;
app.get('/products', (req, res) => {
  const products = [{
    id: 1,
    name: 'laptop',
  },
    {
    id: 2,
    name: 'laptop',
    },
    {
    id: 3,
    name: 'laptop',
    },
    {
    id: 4,
    name: 'laptop',
    },
    {
    id: 5,
    name: 'laptop',
  }
  ]

  res.json(products);
})

//get a single products-dynamic route
//http://localhost:3000/products/1
app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
    const products = [{
    id: 1,
    name: 'laptop',
  },
    {
    id: 2,
    name: 'laptop',
    },
    {
    id: 3,
    name: 'laptop',
    },
    {
    id: 4,
    name: 'laptop',
    },
    {
    id: 5,
    name: 'laptop',
  }
  ]

  const getSingleProduct = products.find((product) => product.id === Number(productId));
  if (getSingleProduct) {
    res.json(getSingleProduct);
  }
  else {
    res.status(404).send('product not found try with different id');
  }
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
