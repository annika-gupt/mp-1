let num1;
let num2;
let output=document.getElementById("output");
let result;

function doAdd(){
    num1=document.getElementById("first-num").value;
    num2=document.getElementById("second-num").value;
    result=Number(num1)+Number(num2);
    if (result<0){
        output.style.color="red";
    }
    else{
        output.style.color="black";
    }
    output.innerHTML=String(result);
}
function doSubtract(){
    num1=document.getElementById("first-num").value;
    num2=document.getElementById("second-num").value;
    result=Number(num1)-Number(num2);
    if(result<0){
        output.style.color="red";
    }
    else{
        output.style.color="black";
    }
    output.innerHTML=String(result);
}
function doMultiply(){
    num1=document.getElementById("first-num").value;
    num2=document.getElementById("second-num").value;
    result=Number(num1)*Number(num2);
    if(result<0){
        output.style.color="red";
    }
    else{
        output.style.color="black";
    }
    output.innerHTML=String(result);
}
function doDivide(){
    num1=document.getElementById("first-num").value;
    num2=document.getElementById("second-num").value;
    result=Number(num1)/Number(num2);
    if(result<0){
        output.style.color="red";
    }
    else{
        output.style.color="black";
    }
    output.innerHTML=String(result);
}
function doPower(){
    num1=document.getElementById("first-num").value;
    num2=document.getElementById("second-num").value;
    result = 1;
    if(num2<0){
        let posNum2 = num2*-1;
        for (let i=0; i<posNum2; i++){
            result=num1*result;
        }
        result=1/result;
    }
    else{
        for (let i=0; i<num2; i++){
            result=num1*result;
        }
    }
    if(result<0){
        output.style.color="red";
    }
    else{
        output.style.color="black";
    }
    output.innerHTML=String(result);
}
function doClear(){
    document.getElementById("first-num").value="";
    document.getElementById("second-num").value="";
    document.getElementById("output").innerHTML="";
}

