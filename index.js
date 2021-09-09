const express = require('express');
const Pizza = require('./Models/PizzaModel');
const db = require('./db');
const app = express();
app.use(express.json());

const pizzasRoute = require('./routes/PizzaRoute');

app.use('/api/pizzas/', pizzasRoute);

app.get('/', (req, res) => {
    res.send("Backend Server is working!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);