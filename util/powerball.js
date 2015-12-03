exports = module.exports = {};
const request = require('superagent');
const cheerio = require('cheerio');

exports.getJackpot = () => {
  return Promise.resolve()
  .then(() => {
    return request.get('http://www.powerball.com/pb_home.asp');
  })
  .then((res) => {
    $ = cheerio.load(res.text);
    var jackpot = $('#mainContent > div.content > table:nth-child(1) > tr > td:nth-child(14) > font > strong');
    return jackpot.html();
  });
};

exports.getNumbers = () => {
  return Promise.resolve()
  .then(() => {
    return request.get('http://www.powerball.com/powerball/winnums-text.txt');
  })
  .then((res) => {
    return res.text;
  });
};

