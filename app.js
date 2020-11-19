const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const { db, Page, User } = require('./models');
const sequelize = require('sequelize');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send(layout(''));
});

db.authenticate().then(() => {
	console.log('connected to the database');
});

const PORT = 3000;
const init = async () => {
	await Page.sync();
	await User.sync();
	app.listen(PORT, () => {
		console.log(`App listening in port ${PORT}`);
	});
};

init();
