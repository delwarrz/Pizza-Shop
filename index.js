const express = require('express');
const Pizza = require('./Models/PizzaModel');
const db = require('./db');
const app = express();
app.use(express.json());

const pizzasRoute = require('./routes/PizzaRoute');
const userroutes = require('./routes/userRoutes');

app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userroutes);

app.get('/', (req, res) => {
    res.send("Backend Server is working!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);