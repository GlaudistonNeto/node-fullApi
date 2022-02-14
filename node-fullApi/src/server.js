const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();

var corsOptions = {
  origin: 'https://localhost:5000'
}

// middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers

const router = require('../routes/productRouter');
app.use('/api/products', router)

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
