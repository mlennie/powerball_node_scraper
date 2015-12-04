var express = require('express');
      powerball = require('../util/powerball'),
      router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json('index', { title: 'Express' });
});

/* GET jackpot */
router.get('/jackpot', (req, res) => {
  powerball.getJackpot()
  .then((results) => {
    return res.json(results);
  })
  .catch(console.log);
});

/* GET winning numbers */
router.get('/numbers', (req, res) => {
  powerball.getNumbers()
  .then((results) => {
    return res.send(results);
  })
  .catch(console.log);
});


module.exports = router;
