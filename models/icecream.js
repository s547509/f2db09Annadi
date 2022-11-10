const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    icecreamName: String,
    icecreamF: String,
    icecreamPrice: Number
})
module.exports = mongoose.model("icecream",icecreamSchema)