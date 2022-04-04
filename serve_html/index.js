//stating port of 3000 using express and controler as well 
const port = 3000;
const express = require("express"),
    app = express(),
    controller = require("./controlers/controlers")

//setting the balues for the server and also binding the application for the server 
app.set("port", port);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('index')

});

app.get("/home", controller.indexsent);
app.get("/images/:Numimage", controller.imagesent);
//listening on port 3000
app.listen(port);