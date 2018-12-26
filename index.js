const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.render('index'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));