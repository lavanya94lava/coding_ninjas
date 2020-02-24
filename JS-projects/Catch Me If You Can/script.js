var box = document.getElementById("box");

var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

window.onresize = function(){
    this.viewHeight = window.innerHeight;
    this.viewWidth = window.innerWidth;
}

box.addEventListener("mouseover",function(){
    var boxProps = box.getBoundingClientRect();
    var pos = getNewRandomPosition(boxProps.width, boxProps.height);
    box.style.top = pos.y + "px";
    box.style.left = pos.x+"px";
});


function getNewRandomPosition(width, height){
    var X = Math.floor(Math.random()*viewWidth -width);
    var Y = Math.floor(Math.random()*viewHeight- height);

    if(X<0){
        X= 0;
    }

    if(Y<0){
        Y = 0;
    }

    return {x:X,
        y:Y
    };
}