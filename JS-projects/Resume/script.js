var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');

for(var i = 0;i<navMenuAnchorTag.length;i++){
     navMenuAnchorTag[i].addEventListener('click',function(event){
         event.preventDefault( );
         var targetSectionID = this.textContent.trim( ).toLowerCase( );
         var targetSection = document.getElementById(targetSectionID);
         var interval = setInterval(function( ){
            var targetCoordinates = targetSection.getBoundingClientRect();
             if(targetCoordinates.top <=0){
                 clearInterval(interval);
				 return;
             }
             window.scrollBy(0,50);
         },50);
     })
}

var progressBars = document.querySelectorAll('.skill-progress >div');
var skillsContainer = document.getElementById('skills-container');
var animation = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth+'%';
        },5);
    }
}
window.addEventListener( 'scroll', checkScroll);

var scrolledBar = document.getElementById("scrolled");
var windowHeight = window.innerHeight;
var docHeight = getDocHeight();
var bufferedDiv = document.getElementById("buffer");


function getDocHeight(){
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
}


window.onresize = function(){
    docHeight = this.getDocHeight();
    this.windowHeight = window.innerHeight;
}

function checkScroll(){
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    scrolledBar.innerText = scrolled;
    if(scrolled==99){
        scrolledBar.innerText =100;
    }
    bufferedDiv.style.width = scrolled+"%"; 
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animation && coordinates.top <= window.innerHeight){
        console.log('hii');
        animation = true;
     	fillBars();  
     }
    else if(coordinates.top > window.innerHeight){
            animation = false;
         	initialiseBars();
    }
    
}
