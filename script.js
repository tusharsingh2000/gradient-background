var color1= document.getElementById("color1");
var color2= document.getElementById("color2");
var body = document.getElementById("grad");
var info= document.querySelector("h3");
function colorchange(){
    body.style.background= "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    info.textContent=body.style.background+";";
}
color1.addEventListener("input",colorchange)
color2.addEventListener("input",colorchange)
