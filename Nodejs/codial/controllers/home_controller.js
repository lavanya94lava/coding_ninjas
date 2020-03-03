module.exports.home = function(req,res){
    console.log(req.cookies);
    return res.render('home',{
        title:"Profile"
    });
    // return res.end("<h1>In the home controller</h1>");
}

