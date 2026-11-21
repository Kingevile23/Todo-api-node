const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    title: {type: String, required:true},
    completed:{type: Boolean, default:false},
    userID: {type: mongoose.Schema.Types.ObjectID,ref:"User"}
})
module.exports = mongoose.model("Todo", todoSchema)
