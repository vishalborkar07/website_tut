const mongoose = require("mongoose")

const DetailSchema = mongoose.Schema({
  brandName: {
    type: String,
    require: true,
  },
  brandIconUrl: {
    type: "String",
    require: true
  },
  links: [
    {
      label: String,
      url: String,
    },
  ]
});


module.exports = mongoose.model("details", DetailSchema);