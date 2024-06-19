const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');
const editRouter = require('./routes/edit');
const deleteRouter = require('./routes/delete');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
