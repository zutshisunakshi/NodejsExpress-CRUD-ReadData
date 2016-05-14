var express = require('express');
var router = express.Router();
var _ = require('underscore');


var books = [
  {
    id: 1,
    genre: 'Fiction',
    title: 'Plumber in the apartment',
    author: 'R.A Sharma',
    edition:'1998'
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
    genre: 'Drama',
    title: 'Home of Gods',
    author: 'Ayan Host',
    edition:'1991'
  },
  {
    id: 4,
    genre: 'Thriller',
    title: 'Ace the blue wind',
    author: 'R.K Row',
    edition:'2003'
  }
];

function lookupBook(book_id) {
  return _.find(books, function(c) {
    return c.id == parseInt(book_id);
  });
}

router.get('/', function(req, res, next) {
  res.render('list', {books: books});
});

router.route('/:book_id')
  .all(function(req, res, next){
    book_id = req.params.book_id;
    book = lookupBook(book_id);
    next();
  })
  .get(function(req,res,next){
    if (typeof(book) !== 'undefined')
      res.render('view', {book: book});
    else
      res.render('WhenNodata');
  });
	
module.exports = router;
