var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var todos = require('../db/dummy_data');
const { URL } = require('url');

app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/')));
// app.use(express.static(path.join(__dirname, '../db/')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.get('/api/todos', (req, res) => {
  res.status(200).send({todos});
});

app.get('/api/todos/search', (req, res) => {
  console.log(req.query);
  if (req.query.name) {
    var queriedTodos = todos.filter( item => {
      return item.todo.includes(req.query.name);
    });
    res.status(200).send({todos: queriedTodos});
  } else {
    res.status(400).send('Invalid query: ' + req.query.name);
  }
});

app.listen(7060, function() {
  console.log('HablaToDo listening on port 7060!');
});
