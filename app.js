const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'), {});

app.get('/', (req, res) => {
	res.send('hello world');
});
