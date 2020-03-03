const home = function(req,res){
    return res.render('home',{
        title:"Profile"
    });
    // return res.end("<h1>In the home controller</h1>");
}

module.exports.home = home;
