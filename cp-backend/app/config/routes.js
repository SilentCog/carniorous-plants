import express from 'express';

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Beware the carnivorous plants!');
});

router.get('/mimi', function(req, res, next) {
  var position = {
    lat: 40.6799909,
    lon: -73.9680101
  };
  res.send(position);
});

router.get('/sandy', function(req, res, next) {
  var position = {
    lat: 40.6799909,
    lon: -73.9680101
  };
  res.send(position);
});

export default router;

