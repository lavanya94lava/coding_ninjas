
// $(function(){
//     $("#date-picker").datepicker();
// });

let container = $("#container");
function getImages(){
    container.empty();
    let date = $("#date-picker").val();
    if(date ==""){
        alert("please enter a date");
        return;
    }
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date+"&api_key=DEMO_KEY";
    $.get(url,function(data){
        let photos_data = data.photos;
        console.log(data);
        if(photos_data.length ==0){
            alert("On this Date our rovers didn't click any photos");
            return;
        }
        $.each(photos_data,function(key,entry){
            container.append(`
                <div class ="images-container">
                    <img src = ${entry.img_src}>
                </div>
            `);
        });
    });
}

$("#fetch").click(getImages);