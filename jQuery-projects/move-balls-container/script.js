
var colors = ['red','blue','yellow', 'lightgrey', 
'darkorchid', 'black', 'orange', 'deeppink', 'green',
 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 
 'firebrick','crimson'];


function addBall(){
    $('#container').append('<div class = "ball" style = "background-color:'+colors[Math.floor(Math.random()*colors.length)]+'"></div>');
}

$('#button').click(addBall);