const express = require('express');
const mongoose = require('mongoose');
const bajuRoutes = require('./routes/bajuRoutes');
const celanaRoutes = require('./routes/celanaRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/bajus', bajuRoutes);
app.use('/celanas', celanaRoutes);

const uri = 'mongodb+srv://marcelo123:marcelo123@cluster0.rcoboug.mongodb.net/baju?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
