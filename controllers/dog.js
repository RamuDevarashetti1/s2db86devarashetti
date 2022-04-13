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

exports.dog_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id);
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

exports.dog_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id);
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