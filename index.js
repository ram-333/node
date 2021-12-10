const express = require('express')
const app = express();
const router = express.Router();
const https = require('https');
const port = 3000;
const qs = require("querystring");

path = require('path');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use('public',express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});