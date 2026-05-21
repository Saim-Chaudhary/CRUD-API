const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is Working...');
});


app.use("/items", productRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});