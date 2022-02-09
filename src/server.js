const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();

var corsOptions = {
  origin: 'https://localhost:5000'
}

// middleware
app.use(cors(corsOptions));

// router
const router = require('../routes/productRouter');
app.use('/api/products', router)

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// testing api
app.get('/', (req, res) => {
  res.json({ message: 'From Api' });
});

// port
const PORT = process.env.PORT || 5000

// server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
