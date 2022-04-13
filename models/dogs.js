const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_bread: String,
    dog_color: String,
    dog_cost: Number
})
module.exports = mongoose.model("Dog", dogSchema)