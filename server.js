const express = require('express');
var app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

var index = require('./routes/index');
app.use('/api', index);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});