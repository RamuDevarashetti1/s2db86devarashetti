var Dog = require('../models/dogs');

exports.dog_list = async function (req, res) {
    try {
        tDogs = await Dog.find();
        res.send(tDogs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.dog_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Dog();
    document.dog_bread = req.body.dog_bread;
    document.dog_cost = req.body.dog_cost;
    document.dog_color = req.body.dog_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.dog_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};



exports.dog_view_all_Page = async function (req, res) {
    try {
        tDogs = await Dog.find();
        res.render('dogs', { title: 'Dog Search Results', results: tDogs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Dog.
exports.dog_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Dog.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle Dog update form on PUT.
exports.dog_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Dog.findById( req.params.id)
    // Do updates of properties
    if(req.body.dog_bread)
    toUpdate.dog_bread = req.body.dog_bread;
    if(req.body.dog_cost) toUpdate.dog_cost = req.body.dog_cost;
    if(req.body.dog_color) toUpdate.dog_color = req.body.dog_color;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};