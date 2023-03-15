const express = require('express')
const routes = express.Router()
const Detail = require("../Models/Detail")
const Slider = require("../Models/Slider")
const Service = require("../Models/Service")
const Contact = require('../Models/Contact')
const Banner = require('../Models/Banner')


//To get model data
// routes.get("/details", async (req, res) => {
//     try {
//         const user = await Detail.find();
//         res.send(user)
//         console.log(user)
//     } catch (err) {
//         res.send(err)
//         console.log(err)
//     }
// });

// //To create model data
// routes.post("/details", async(req, res) => {
//   try {
//     const user = await Detail.create(req.body);
//     res.send(user);
//     console.log(user);
//   } catch (err) {
//     res.send(err);
//     console.log(err);
//   }
// });



//to get data from models Details and Slider
routes.get("/", async (req, res) => {
  try {
    const detail = await Detail.findOne({ "id": "3eb251bea7cfca2477a272f" });  // to get Details model data
    const slides = await Slider.find();  //to get Slider model data
    const service = await Service.find();
    const banners = await Banner.find();

    res.render("index", {
      detail: detail,
      slides: slides,
      service: service,
      banner1: banners[0],
      banner2: banners[1],
    });
    //console.log(detail)
    //console.log(slides);
    //console.log(service);
  } catch (err) {
    console.log(err)
  }
  
});


// routes.get("/services", async (req, res) => {
//   try {
//     const detail = await Detail.findOne({ id: "63eb4af83760cbd183aa0556" });
//     res.render("services", {
//       detail: detail,
//     });
//     console.log(detail);
//   } catch (err) {
//     console.log(err);
//   }
// });

// routes.get("/gallery", async (req, res) => {
//   try {
//     const detail = await Detail.findOne({ id: "63eb4af83760cbd183aa0557" });
//     res.render("gallery", {
//       detail: detail,
//     });
//     console.log(detail);
//   } catch (err) {
//     console.log(err);
//   }
// });

// routes.get("/about-us", async (req, res) => {
//   try {
//     const detail = await Detail.findOne({ id: "63eb4af83760cbd183aa0558" });
//     res.render("about-us", {
//       detail: detail,
//     });
//     console.log(detail);
//   } catch (err) {
//     console.log(err);
//   }
// });

// routes.get("/contact-us", async (req, res) => {
//   try {
//     const detail = await Detail.findOne({ id: "63eb4af83760cbd183aa0559" });
//     res.render("contact-us", {
//       detail: detail,
//     });
//     console.log(detail);
//   } catch (err) {
//     console.log(err);
//   }
// }); 




// For handling contact-us form data

routes.post("/process-contact-form", async(req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.redirect("/");
    console.log(contact);
  } catch (err) { 
    res.redirect("/");
    console.log(err);
  }
  
});


module.exports = routes