window.onload= function(){
    $("#previous-button").attr("disabled",true);
    $("#next-button").attr("disabled",true);
};

let container = $("#container");
let pagination = $("#pagination");

let images_data = null;
let elementsPerPage = null;
let total_pages = null;
let currentPage = 1;

function getImages(){
    container.empty();
    pagination.empty();
    let solValue = $("#sol-input").val();
    if(solValue>1000 ||solValue==""||solValue<=0){
        alert("please enter a valid value in input");
        return;
    }
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+solValue+"&api_key=DEMO_KEY";
    $.get(url,function(data){
        let photos_data = data.photos;
        images_data = photos_data
        console.log(photos_data.length);
        if(photos_data.length==0){
            alert("Our rovers didn't click any photos that day, please choose another day");
            return;
        }
        elementsPerPage = 20;
        total_pages = photos_data.length/elementsPerPage+1;
        for(let i =1;i<=total_pages;i++){
            $("#pagination").append('<li><div class ="paginDiv"><a class = "newPage" href = "#">'+(i)+'</a></div></li>');
        }
        showPage(currentPage);
    });
}

function showPage(pageNumber){
    container.empty();
    if(pageNumber >1){
        $("#previous-button").prop("disabled",false);
    }

    if(pageNumber !=parseInt(total_pages)){
        $("#next-button").prop("disabled",false);
    }
    else{
        $("#next-button").prop("disabled",true);
    }

    $.each(images_data,function(key, value){
        if(key >=elementsPerPage*(pageNumber-1) && key <elementsPerPage*(pageNumber)){
            container.append(`
                <div class ="images-container">
                    <img src = ${value.img_src}>
                </div>
            `);
        }
    });
};

$("#pagination").on('click','.paginDiv',function(){
    let pageNumber = parseInt($(this).text());
    currentPage = pageNumber;
    $(".paginDiv").removeClass("current");
    $(this).addClass("current");
    showPage(pageNumber);
});

$("#next-button").click(function(){
    showPage(currentPage+1);
});


$("#previous-button").click(function(){
    showPage(currentPage-1);
});

$("#fetch-button").click(getImages);