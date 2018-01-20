import express from 'express';

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Beware the carnivorous plants!');
});

export default router;

