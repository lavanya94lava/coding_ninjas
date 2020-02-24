var buttons = document.getElementsByClassName("button");
console.log(buttons[17].innerText);
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = 1;
var operator = null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.innerText;
        if(value =='+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText ='';
        }
        else if(value== '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText ='';
        }
        else if(value== '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText ='';
        }
        else if(value== '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText ='';
        }
        else if(value== '='){
            operand2 = parseFloat(display.textContent);
            var res = eval(operand1+" "+operator+" "+ operand2);
            display.innerText = res;
            operand1 = res;
            operator = null;
        }
        else if(value== 'AC'){
            display.innerText = '';
            operand1 = 0;
            operand2 = 0;
            operator = null;
        }
        else if(value =='+/-'){
            var ans = null;
            if(parseFloat(display.innerText)<0){
                ans = Math.abs(parseFloat(display.innerText));
            }
            else{
                var temp = parseFloat(display.innerText);
                ans = temp - 2*temp;
            }
            display.innerText = ans;
        }
        else if(value=='backspace'){
            var temp = parseFloat(display.textContent);
            if(temp%1==0){
                temp = temp/10;
                temp = parseInt(temp);
            }
            else{
                var rem = temp%1;
                temp = temp-rem+'.';
            }
            display.innerText = temp;
        }
        else if(value =='%'){
            operator= '%';
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
        }
        else{
            display.innerText += value;
        }

    });
}