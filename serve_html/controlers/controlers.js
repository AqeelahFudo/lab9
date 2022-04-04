//rendering the view to send out .ejs
exports.indexsent = (req,res) => {
    res.render("index");
};

exports.imagesent = (req,res) => {
    let imageName = req.params.Numimage;
    if (imageName == 1) {
        res.render("image1");
    };

    if (imageName == 2) {
        res.render("image2");
    }

    if (imageName == 3) {
        res.render("image3")
    }
    
}