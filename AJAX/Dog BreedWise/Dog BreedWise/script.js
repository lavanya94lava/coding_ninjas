// function fetchImage(){

//     // var req = new XMLHttpRequest();
//     // req.onload = function(){
//     //     console.log(req.response);
//     //     var responseJSON = JSON.parse(req.response);
//     //     var imageURL = responseJSON.message;
//     //     $('#dog-image').attr('src',imageURL);
//     // };
//     // req.open('get','https://dog.ceo/api/breeds/image/random');
//     // req.send();
//     $.get('https://dog.ceo/api/breeds/image/random',function(data){
//         var imageURL = data.message;
//         $('#dog-image').attr('src',imageURL);
//     });
// }

// $("#btn").click(fetchImage);


window.onload = function () {
   $("#image-container").hide();
   $("#next-image-btn").hide();
   $("#breed-btn").addClass("change-cursor");
   $("#breed-btn").prop("disabled",true);
   var breed = $("#breed-select");
   breed.append('<option selected ="true" disabled>Choose Dog Breed</option>');
   var url = "https://dog.ceo/api/breeds/list/all";
   $.get(url,function(data){
        var dogdata = data.message;
        $.each(dogdata,function(key,entry){
            breed.append($('<option></option>').attr('value',key).text(key));
        })
   });
};

$("#breed-select").on('change',function(){
    $("#breed-btn").removeClass("change-cursor");
    $("#breed-btn").prop("disabled",false);
});


function getImageOfThisBreed(){    
    $("#image-container").show();
    $("#next-image-btn").show();
    var breed = $('#breed-select').val();
    var url = "https://dog.ceo/api/breed/"+breed+"/images/random";
    
    $.get(url,function(data){
        $('#dog-image').attr('src',data.message);
    })
    $("#breed-btn").addClass("change-cursor");
    $("#breed-btn").prop("disabled",true);
}

$('#breed-btn').click(getImageOfThisBreed);

$('#next-image-btn').click(getImageOfThisBreed);