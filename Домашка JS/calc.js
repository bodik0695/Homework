var firstArgument;
var secondArgument;
var operator;
var result;
var temp = "";

function addTo(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		
	}
		else {
		var screen = document.querySelector("input.screen");
		temp = "";
		firstArgument = +screen.value;
		screen.setAttribute("value", "+");	
	}
}
function minus(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		
	}
		else {
		var screen = document.querySelector("input.screen");
		temp = "";
		firstArgument = +screen.value;
		screen.setAttribute("value", "-");	
	}
}
function multiply(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		
	}
		else {
		var screen = document.querySelector("input.screen");
		temp = "";
		firstArgument = +screen.value;
		screen.setAttribute("value", "*");	
	}
}
function divide(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		
	}
		else {
		var screen = document.querySelector("input.screen");
		temp = "";
		firstArgument = +screen.value;
		screen.setAttribute("value", "/");
	}
}

function equal(){
	temp = "";
	var screen = document.querySelector("input.screen");
	secondArgument = +screen.value;
	switch (operator) {
	  case "+":
		result = firstArgument + secondArgument;
		screen.setAttribute("value", result);
		firstArgument = "";
		secondArgument = "";
		result = "";
		operator = "";
		break;
	  case "-":
		result = firstArgument - secondArgument;
		screen.setAttribute("value", result);
		firstArgument = "";
		secondArgument = "";
		result = "";
		operator = "";
		break;
	  case "*":
		result = firstArgument * secondArgument;
		screen.setAttribute("value", result);
		firstArgument = "";
		secondArgument = "";
		result = "";
		operator = "";
		break;
	  case "/":
		if(secondArgument != 0){
			result = firstArgument / secondArgument;
			screen.setAttribute("value", result);
			firstArgument = "";
			secondArgument = "";
			result = "";
			operator = "";
		}
		else{
			screen.setAttribute("value", "division by zero");
			firstArgument = "";
			secondArgument = "";
			result = "";
			operator = "";
		}
		break;
		case "NaN":
		screen.value = '';
		break;
	  /*default:
		screen.setAttribute("value", "Error");
		break;*/
	}
}
function plusMinus(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."
	|| screen.value == ""){}
	else{
		temp *= -1;
		screen.setAttribute("value", temp);
	}
}
function point(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		
	}
	else{ 
		if(screen.value.indexOf(".") == -1){
			temp += ".";
			+screen.setAttribute("value", temp);
		}
		else{}
	}
	
}
function del(){
	var screen = document.querySelector("input.screen");
	screen.setAttribute("value", "");
	//screen.value = "";
	temp = "";
}
function zero(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "0";
	+screen.setAttribute("value", temp);
	
}
function one(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	else {
		temp += "1";
		+screen.valuesetAttribute("value", temp);
	}
}
function two(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "2";
	+screen.setAttribute("value", temp);
}
function three(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	  || screen.value == "-" 
	  || screen.value == "*" 
	  || screen.value == "/"
	  || screen.value == "."){
		operator = screen.value;
	}
	temp += "3";
	+screen.setAttribute("value", temp);
}
function four(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "4";
	+screen.setAttribute("value", temp);
}
function five(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "5";
	+screen.setAttribute("value", temp);
}
function six(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "6";
	+screen.setAttribute("value", temp);
}
function seven(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "7";
	+screen.setAttribute("value", temp);
}
function eight(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "8";
	+screen.setAttribute("value", temp);
}
function nine(){
	var screen = document.querySelector("input.screen");
	if(screen.value == "+" 
	|| screen.value == "-" 
	|| screen.value == "*" 
	|| screen.value == "/"
	|| screen.value == "."){
		operator = screen.value;
	}
	temp += "9";
	+screen.setAttribute("value", temp);
}
document.getElementById("0").onclick = zero;
document.getElementById("1").onclick = one;
document.getElementById("2").onclick = two;
document.getElementById("3").onclick = three;
document.getElementById("4").onclick = four;
document.getElementById("5").onclick = five;
document.getElementById("6").onclick = six;
document.getElementById("7").onclick = seven;
document.getElementById("8").onclick = eight;
document.getElementById("9").onclick = nine;
document.getElementById("+").onclick = addTo;
document.getElementById("-").onclick = minus;
document.getElementById("*").onclick = multiply;
document.getElementById("/").onclick = divide;
document.getElementById("+-").onclick = plusMinus;
document.getElementById(".").onclick = point;
document.getElementById("=").onclick = equal;
document.getElementById("C").onclick = del;
