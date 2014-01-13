var express = require('express');
var app = express();

app.use(express.static('www'))
app.use(express.bodyParser());

app.get('*', function(req, res) {
  res.sendfile('index.html');
});

app.listen(3000);
console.log('serving on 3k');