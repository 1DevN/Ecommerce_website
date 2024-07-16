var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  let products = [
    {
        name: "Samsung A53",
        category: "Mobile",
        description: "The Samsung A53 is a versatile smartphone with a stunning display and excellent camera capabilities.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKD479e8eKc2e7Qi4SFJ9zSOWTSbcgyFOeQ&s"
    },
    {
        name: "iPhone 11",
        category: "Mobile",
        description: "The iPhone 11 offers a perfect balance of performance and affordability with its powerful A13 Bionic chip and dual-camera system.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpR1JmxFg_I48NizXMOlvo_jdIe0NnwLsKzQ&s"
    },
    {
        name: "Google Pixel 6",
        category: "Mobile",
        description: "The Google Pixel 6 features advanced AI capabilities, a sleek design, and an exceptional camera system.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDOvgbGw1ypZpbyEWNejcz7nnkHpvFruitA&s"
    }
];

  res.render('index', { title: 'Shop-K',products });
});

module.exports = router;
