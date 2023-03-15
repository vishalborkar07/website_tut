const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({

    email: String,
    phone: String,
    query: String
});

module.exports = mongoose.model("contacts", ContactSchema);