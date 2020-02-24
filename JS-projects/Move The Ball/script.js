var ball = document.getElementById("ball");

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;


window.onresize = function(){
    this.ballHeight = ball.offsetHeight;
    this.ballWidth = ball.offsetWidth;
}

function moveTheBall(keydown){
    var top = parseInt(ball.offsetTop);
    var left = parseInt(ball.offsetLeft);


    if(keydown==="KeyW"){
        if(top > 2){
            ball.style.top = (top-2)+"px";
        }
    }
    else if(keydown ==="KeyA"){
        if(left > 2){
            ball.style.left = (left-2)+"px";
        }
    }
    else if(keydown ==="KeyS"){
        if(top < (window.innerHeight-ballHeight)-2){
            ball.style.top = (top+2)+"px";
        }
    }
    else if(keydown ==="KeyD"){
        if(left < (window.innerWidth-ballWidth)-2){
            ball.style.left = (left+2)+"px";
        }
    }
}

window.addEventListener("keydown",function(event){
    moveTheBall(event.code);
});