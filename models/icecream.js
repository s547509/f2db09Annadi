const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    icecreamName: {
        type:String,
        required:true,
    },
    icecreamF: {
        type:String,
        required:true,
    },
    icecreamPrice:{
        type: Number,
        required:true,
        min:1,
        max:2000},
})
module.exports = mongoose.model("icecream",icecreamSchema)