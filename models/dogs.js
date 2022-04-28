const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_bread: { 
        type: String,
        minLength: 2,
        maxLength: 25, 
        required: true,
        trim: true
    },
    dog_color: { 
        type: String, 
        required: true
    },
    dog_cost:{ 
        type: Number, 
        min:[10, 'Minimum of 10$ but, got {VALUE}'], 
        max:2000
    }
})
module.exports = mongoose.model("Dog", dogSchema)