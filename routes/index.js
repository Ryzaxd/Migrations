var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = require('../models');

/* GET home page. */
router.get('/', async(req, res, next) => {
  try {
    let users = await db.User.findAll();
    res.render('index', { title: 'Brugere i systemet', users });
  } catch (err) {
    next(err);
  }
});

module.exports = router;