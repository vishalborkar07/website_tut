const express = require('express')
const app = express()
const Router = require("../Routes/routes")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const hbs = require("hbs")
//const Detail = require("../Models/Detail")
//const Slider = require("../Models/Slider")
//const Service = require("../Models/Service") 
//const Contact = require("../Models/Contact")
const Banner = require('../Models/Banner')

app.use('/static',express.static('public'));

app.use(bodyParser.json()); // for taking input from request body client-side

app.use(
  bodyParser.urlencoded({   //bodyParser for taking data from forms
    extended: true,        //this needs to be configure before configuring Router.
  })
); 

app.use("", Router);

app.set("view engine", "hbs")
app.set("views", "views")

hbs.registerPartials("views/partials");

mongoose.connect("mongodb://localhost/website_tut", () => {

    console.log("database Connected");

    // Banner.create(
    //   {
    //     title: "we work for people , not for money",
    //     paragraph:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tempora distinctio necessitatibuspraesentium iure.Vel beatae dolorum minus rem illum molestias numquam id repellat. Velit, eligendi. Maiores,dignissimos. Ducimus, minima!",

    //     imageUrl: "/static/images/banner2.png",
    //   },
    // );
  
    // Contact.create({

    //     email: "",
    //     phone: "",
    //     query: "",
    // });
    // Service.create([
    //   {
    //     icon: "fab fa-graduation-cap",
    //     title: "Provide Best Courses",
    //     description:
    //       "We provide courses that helps our student in learning and placements",
    //     linkText: "Check",
    //     link: "google.com",
    //   },
    //   {
    //     icon: "fa-solid fa-code",
    //     title: "Best Course for coding",
    //     description:
    //       "We provide courses that helps our student in learning coding and get placed",
    //     linkText: "Check",
    //     link: "google.com",
    //   },
    // ]);

    // Slider.create(
    //     [
    //     {
    //         title: "learn java in very easy manner",
    //         subTitle: "java is one of the popular programming language",
    //         imageUrl: "static/images/img.jpg",
    //         class: "active",
    //     },
    //     {
    //         title: "learn c++ in very easy manner",
    //         subTitle: "C++ is one of the popular programming language",
    //         imageUrl: "static/images/img2.jpg",
    //         class: "",
    //     },
    //     {
    //         title: "learn Node js easily",
    //         subTitle: "Node js is runtime environment for executing javascript out of browser",
    //         imageUrl: "static/images/img3.jpg",
    //         class: "",
    //     }
    //     ]);

    // Detail.create({
    //   brandName: "Vishal Infotech Technology",
    //   brandIconUrl:
    //     "https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
    //   links: [
    //     {
    //       label: "home",
    //       url: "/",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About-Us",
    //       url: "/about-us",
    //     },
    //     {
    //       label: "Contact-Us",
    //       url: "/Contact-us",
    //     },
    //   ],
    // });
    
});

app.listen(5000, () => {

    console.log("server is running.");
});

