window.onload= function(){
    $("#previous-button").attr("disabled",true);
    $("#next-button").attr("disabled",true);
};

let container = $("#container");
let pagination = $("#pagination");
let slider = 5;
let startSlide = 1;
let endSlide = slider;
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
        paginateSlide();
        showPage(currentPage);
    });
}

function showPage(pageNumber){
    container.empty();
    if(pageNumber >1){
        startSlide = pageNumber-1;
        if(startSlide<1){
            startSlide = 1;
        }
        endSlide = pageNumber+3;
        if(endSlide>total_pages){
            endSlide = total_pages;
        }
        paginateSlide();
        $("#previous-button").prop("disabled",false);
    }
    else{
        $("#previous-button").prop("disabled",true);
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


function paginateSlide(){
    for(let i =startSlide;i<=endSlide;i++){
        $("#pagination").append('<li><div class ="paginDiv"><a class = "newPage" href = "#">'+(i)+'</a></div></li>');
    }
}

$("#pagination").on('click','.paginDiv',function(){
    let pageNumber = parseInt($(this).text());
    if(pageNumber == currentPage){
        return;
    }
    currentPage = pageNumber;
    $(".paginDiv").removeClass("current");
    $(this).addClass("current");
    showPage(pageNumber);
});

$("#next-button").click(function(){
    currentPage = currentPage+1;
    $(".paginDiv").removeClass("current");
    $($('.paginDiv')[currentPage-1]).addClass("current");
    showPage(currentPage);
});


$("#previous-button").click(function(){
    currentPage = currentPage-1;
    $(".paginDiv").removeClass("current");
    $($('.paginDiv')[currentPage-1]).addClass("current");
    showPage(currentPage);
});

$("#fetch-button").click(getImages);