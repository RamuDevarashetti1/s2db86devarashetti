var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var dog_controller = require('../controllers/dog');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

/// dog ROUTES ///
// POST request for creating a dog.
router.post('/dogs', dog_controller.dog_create_post);
// DELETE request to delete dog.
router.delete('/dogs/:id', dog_controller.dog_delete);
// PUT request to update dog.
router.put('/dogs/:id', dog_controller.dog_update_put);
// GET request for one dog.
router.get('/dogs/:id', dog_controller.dog_detail);
// GET request for list of all dog items.
router.get('/dogs', dog_controller.dog_list);
module.exports = router;
