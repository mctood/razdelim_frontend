var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    header_sum: 1500,
    SRV_i_owe: [
      {
        "person": "A",
        "amount": 500
      },
      {
        "person": "B",
        "amount": 500
      },
      {
        "person": "C",
        "amount": 500
      },
      {
        "person": "D",
        "amount": 500
      },
      {
        "person": "E",
        "amount": 500
      }
    ],
    SRV_owed_to_me: [
      {
        "person": "F",
        "amount": 500
      },
      {
        "person": "G",
        "amount": 500
      },
      {
        "person": "H",
        "amount": 500
      },
      {
        "person": "I",
        "amount": 500
      },
      {
        "person": "J",
        "amount": 500
      }
    ]
  });
});
router.get('/groups', function(req, res, next) {
  res.render('groups', {
    header_sum: 1500
  });
});
router.get('/i_owe', function(req, res, next) {
  res.render('i_owe', {
    header_sum: 1500
  });
});
router.get('/owe_to_me', function(req, res, next) {
  res.render('owe_to_me', {
    header_sum: 1500
  });
});
router.get('/add_bill', function(req, res, next) {
  res.render('forms/add_bill', {
    header_sum: 1500
  });
});
router.get('/profile', function(req, res, next) {
  res.render('profile', {
    header_sum: 1500,
    name: "Жаб",
    surname: "Жабович"
  })
});
router.get('/register', function(req, res, next) {
  res.render('forms/register', {
    header_sum: 1500,
    name: "Жаб",
    surname: "Жабович"
  })
});
router.get('/login', function(req, res, next) {
  res.render('forms/login', {
    header_sum: 1500,
    name: "Жаб",
    surname: "Жабович"
  })
});
router.get('/bill', function(req, res, next) {
  res.render('bill', {
    header_sum: 1500,
    name: "Жаб",
    surname: "Жабович"
  })
});
router.get('/group', function(req, res, next) {
  res.render('group', {
    header_sum: 1500,
    name: "Жаб",
    surname: "Жабович",
  })
});
router.get('/history', function(req, res, next) {
  res.render('history', {
    header_sum: 1500,
    name: "Жаб",
    surname: "Жабович",
  })
});
module.exports = router;
