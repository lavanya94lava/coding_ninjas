
let container = $("#container");

function getImages(){
    container.empty();
    let solValue = $("#sol-input").val();
    let pageValue = $("#page-input").val();
    if(solValue>1000 ||pageValue==""||solValue==""){
        alert("please enter a valid value in input");
        return;
    }
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+solValue+"&page="+pageValue+"&api_key=DEMO_KEY";
    $.get(url, function(data){
        console.log(data);
        let photo_data = data.photos;
        if(photo_data.length ==0){
            alert("we dont have images for the given parameters");
            return;
        }
        $.each(photo_data,function(key,value){
            container.append(`
                <div class = "images-container">
                    <img src = ${value.img_src}>
                </div>
            `);
        });
    });
}

$("#fetch").click(getImages);