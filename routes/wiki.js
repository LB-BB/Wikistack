const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

const slugger = (inputString) => {
    inputString = inputString.toLowerCase();
    return inputString.replace(/\s+/g, '_').replace(/\W/g, '');

}


router.get('/', (req, res, next) => {
	res.redirect('/wiki');
});
//retrieve all wiki pages

router.post('/', async (req, res, next) => {

    // add definitions for title & content
    const title = req.body.title;
    const content = req.body.content;
    try {
        const page = await Page.create({
            title: title,
            content: content
        })
        res.redirect('/');

    } catch (error) {
        { next(error) }
    }
});
//submit a new page to db

router.get('/add', (req, res, next) => {
	res.send(addPage());
});
//get the add a page form

module.exports = router;
