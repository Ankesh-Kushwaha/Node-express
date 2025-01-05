require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');
const homeRoute = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes');

//connection to database
connectToDB();
const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoute);
app.use('/api/admin', adminRoutes);



app.listen(PORT,()=>{
  console.log('server is running at the port : 3000');
})