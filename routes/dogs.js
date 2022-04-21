var express = require('express');
const dog_controller = require('../controllers/dog');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.get('dogs', { title: 'Search Results' });
// });


/* GET costumes */

router.get('/', dog_controller.dog_view_all_Page );
/* GET detail dog page */
router.get('/detail', dog_controller.dog_view_one_Page);
/* GET create dog page */
router.get('/create', dog_controller.dog_create_Page);
/* GET create update page */
router.get('/update', dog_controller.dog_update_Page);
/* GET delete dog page */
router.get('/delete', dog_controller.dog_delete_Page);

module.exports = router;

