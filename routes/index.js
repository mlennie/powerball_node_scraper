const express = require('express');
      powerball = require('../util/powerball'),
      response = require('../util/response'),
      router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json('index', { title: 'Express' });
});

/* GET jackpot */
router.get('/jackpot', function(req, res) {
  powerball.getJackpot()
    .then(response.returnSuccess)
    .catch(response.returnError);
});

/* GET winning numbers */
router.get('/numbers', function(req, res) {
  powerball.getWinningNumbers()
    .then(response.returnSuccess)
    .catch(response.returnError);
});


module.exports = router;
