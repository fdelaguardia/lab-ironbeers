var express = require('express');
var router = express.Router();

const PunkAPIWrapper = require("punkapi-javascript-wrapper")
const punkAPI = new PunkAPIWrapper()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IronBeers' });
});


router.get("/beers", ((req, res, next) => {
  punkAPI
    .getBeers()
    .then((beersFromApi) => {
      console.log(beersFromApi)
      res.render("beers", {beersFromApi})
    })
    .catch(error => console.log(error)); 
}))


router.get("/random-beer", ((req, res, next) => {
  punkAPI
    .getRandom()
    .then((responseFromAPI) => {
      res.render("random-beer", {responseFromAPI})
    })
    .catch(error => console.log(error));
}))


router.get("/beer/:id", ((req, res, next) => {
  punkAPI
    .getBeer(req.params.id)
    .then((result) => {
      res.render("beerdetail", {result})
    })
    .catch(error => console.log(error));
}))


module.exports = router;
