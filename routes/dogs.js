var express = require('express');
const dog_controller = require('../controllers/dog');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.get('dogs', { title: 'Search Results' });
// });


/* GET costumes */

router.get('/', dog_controller.dog_view_all_Page );

module.exports = router;

