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

exports.dog_delete =async function (req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Dog.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send('{"error": Error deleting ${err}}');
}
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


exports.dog_view_all_Page = async function (req, res) {
    try {
        lapto1 = await Dog.find();
        res.render('dogs', { title: 'Dogs avialble', results: lapto1 });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.dog_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Dog.findById(req.query.id)
        res.render('dogdetail',
            { title: 'Dog Details', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.dog_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('dogcreate', { title: 'Dog Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.dog_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Dog.findById(req.query.id)
        res.render('dogupdate', { title: 'Dog Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


exports.dog_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Dog.findById(req.query.id)
        res.render('dogdelete', {title: 'Dog Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};