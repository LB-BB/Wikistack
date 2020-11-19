const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send('LOLO IS A VERY GOOD CAT')
})
//retrieve all wiki pages

router.post("/", (req, res, next) => {
    res.send('')
})
//submit a new page to db

router.get("/add", (req, res, next) => {
    res.send('')
})
//get the add a page form

module.exports = router;