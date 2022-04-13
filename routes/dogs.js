var express = require('express');
const dog_controller = require('../controllers/dog');
var router = express.Router();


/* GET costumes */
router.get('/', dog_controller.dog_view_all_Page );

module.exports = router;
