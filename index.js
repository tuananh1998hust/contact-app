const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routesUsers = require('./routes/routes.users.js');

const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.render('index'));

app.use('/users', routesUsers);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));