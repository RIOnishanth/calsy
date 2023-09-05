function Addition(a,b){
    var a= parseInt(document.getElementById("num1").value);
    var b= parseInt(document.getElementById("num2").value);
    document.getElementById("ans1").innerHTML= a+b;
}
function Subtraction(a,b){
    var a= parseInt(document.getElementById("num1").value);
    var b= parseInt(document.getElementById("num2").value);
    document.getElementById("ans2").innerHTML= a-b;
}
function Multiplication(a,b){
    var a= parseInt(document.getElementById("num1").value);
    var b= parseInt(document.getElementById("num2").value);
    document.getElementById("ans3").innerHTML= a*b;
}
function Division(a,b){
    var a= parseInt(document.getElementById("num1").value);
    var b= parseInt(document.getElementById("num2").value);
    document.getElementById("ans4").innerHTML= a/b;
}