const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    city: String,
    country: String,
    income: String,
    email: String,
});

module.exports = mongoose.model("Blog", userSchema);