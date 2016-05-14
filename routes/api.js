var express = require('express');
var router = express.Router();
var _ = require('underscore');
var fs = require('fs');
var books = [
  {
    id: 1,
    genre: 'Fiction',
    title: 'Plumber',
    author: 'R.K Rowling',
    edition:'2007'
  },
  {
    id: 2,
    genre: 'Non-Fiction',
    title: 'Owl in woods',
    author: 'J.K Mantan',
    edition:'2002'
  },
  {
    id: 3,
    genre: 'Non-Fiction',
    title: 'Plumber',
    author: 'Ayan Rand',
    edition:'1991'
  },
  {
    id: 4,
   genre: 'Fiction',
    title: 'Plumber2',
    author: 'R.K Rowling',
    edition:'2003'
  }
];

function lookupBook(book_id) {
  return _.find(books, function(c) {
    return c.id == parseInt(book_id);
  });
}


router.get('/', function(req, res, next) {
  //res.render('list', {contacts: contacts});
  res.json(books);
});


router.route('/:book_id')
  .all(function(req, res, next){
    book_id = req.params.book_id;
    book = lookupBook(book_id);
    next();
  })
  .get(function(req,res,next){
    if (typeof(book) !== 'undefined')
      res.json(book);
    else
      res.render('WhenNodata');
  });
	
module.exports = router;
