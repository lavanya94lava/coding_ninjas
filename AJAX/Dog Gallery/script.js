

let dogdata = [];
let container = $("#container");
let breedSelect = $("#breed-select");

window.onload = function () {
    $("#sub-breed-select").hide();
    $("#get-image-btn").addClass("change-cursor");
    $("#get-image-btn").prop("disabled",true);
    breedSelect.append('<option selected ="true" disabled>Choose Dog Breed</option>');
    var url = "https://dog.ceo/api/breeds/list/all";
    $.get(url,function(data){
        dogdata = data["message"];
        $.each(dogdata,function(key,entry){
            breedSelect.append($('<option></option>').attr('value',key).text(key));
        });
    });
 };

 let subBreedData = [];
 let subBreedSelect = $("#sub-breed-select"); 
 
 breedSelect.on('change',function(){
    subBreedSelect.empty();
    let breed = $('#breed-select').val();
    subBreedData = dogdata[breed];
    if(subBreedData.length!=0){
        $("#get-image-btn").addClass("change-cursor");
        $("#get-image-btn").prop("disabled",true);
        subBreedSelect.show();
        subBreedSelect.append('<option selected = "true" disabled>Choose Dog Sub Breed</option>');
        $.each(subBreedData,function(index,value){
            subBreedSelect.append($('<option></option>').attr('value',value).text(value));
        });
    }
    else{
        $("#get-image-btn").removeClass("change-cursor");
        $("#get-image-btn").prop("disabled",false);
        subBreedSelect.hide();
    }
});

subBreedSelect.on('change',function(){
    $("#get-image-btn").removeClass("change-cursor");
    $("#get-image-btn").prop("disabled",false);
});

function getImages(){
    container.empty();
    if(subBreedData.length > 0){
        let url = "https://dog.ceo/api/breed/"+breedSelect.val()+"/"+ $("#sub-breed-select").val()+"/images";
        $.get(url,function(data){
            $.each(data.message,function(key,value){
                container.append(`
                    <div class = "images-container">
                        <img src = ${value}>
                    </div>
                `);
            });
        });
    }
    else{
        let url = "https://dog.ceo/api/breed/"+breedSelect.val()+"/images";
        $.get(url,function(data){
            $.each(data.message,function(key,value){
                container.append(`
                    <div class = "images-container">
                        <img src = ${value}>
                    </div>
                `);
            });
        });
    }
}

$("#get-image-btn").click(getImages);
