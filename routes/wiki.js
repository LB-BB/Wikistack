const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
	res.redirect('/wiki');
});
//retrieve all wiki pages

router.post('/', (req, res, next) => {
	res.json(req.body);
});
//submit a new page to db

router.get('/add', (req, res, next) => {
	res.send(addPage());
});
//get the add a page form

module.exports = router;
