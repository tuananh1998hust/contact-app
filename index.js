const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const routesUsers = require('./routes/routes.users');
const routesAuth = require('./routes/routes.auth');
const middlewareAuth = require('./middleware/middleware.auth');

const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('tuananh1998hust'));

app.get('/', (req, res) => res.render('index'));

app.use('/users', middlewareAuth.mustLogin, routesUsers);

app.use('/auth', routesAuth);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));