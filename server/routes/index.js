const express = require('express');
const router = express.Router();
const Book = require('../model/book'); // (changed to fix 404 error when passing)

/* GET Home page with All Books */
router.get('/', async (req, res, next) => {
  try {

    const BookList = await Book.find();
    res.render('index', { 
      title: 'Home', 
      BookList: BookList 
    });
  } catch (err) {
    console.error(err);
    res.render('index', { 
      title: 'Home', 
      BookList: [] // passes empty array in case of error
    });
  }
});

module.exports = router;
