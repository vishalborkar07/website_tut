const mongoose = require('mongoose')

const SliderSchema = mongoose.Schema({

    title: String,
    subTitle: String,
    imageUrl: String,
    class: String
});

module.exports=mongoose.model("slider",SliderSchema)