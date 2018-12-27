const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersRoutes = require('./routes/routes.users');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.render('index'));

app.use('/users', usersRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));