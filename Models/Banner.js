const mongoose = require("mongoose")

const BannerSchema = mongoose.Schema({

    title: String,
    paragraph: String,
    imageUrl: String
});


module.exports = mongoose.model("banners", BannerSchema);