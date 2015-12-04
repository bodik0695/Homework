var firstArgument = "";
var operator;
var result = 0;
function point(num){	
		if($("#scr").val().indexOf(".") == -1){
			var f = $("#scr").val() + num;
			$("#scr").val(f);
		}
		else{}
}
function addNumber(num){	
	var temp = $("#scr").val() + num;
	$("#scr").val(temp);
}
function operation(op){
	firstArgument = +$("#scr").val();
	var temp = "";
	$("#scr").val(temp);
	operator = op;
}
function kill(){
	var temp = "";
	$("#scr").val(temp);
	firstArgument = "";
	operator = "";
	result = "";
}
function plMn(){
	var temp2 = +$("#scr").val() * -1;
	 $("#scr").val(temp2);
}
function equal() {
	switch (operator) {
	  case "+":
		var result = firstArgument + +$("#scr").val();
		$("#scr").val(result);
	  break;
	  case "-":
		result = firstArgument - +$("#scr").val();
		$("#scr").val(result);
	  break;
	  case "*":
		result = firstArgument * +$("#scr").val();
		$("#scr").val(result);
	  break;
	  case "/":
	  if($("#scr").val() != 0){
			result = firstArgument / +$("#scr").val();
			$("#scr").val(result);
	  }
	  else{
		$("#scr").val("Division by zero")
	  }
	  break;
	  default:
	  alert("enter the first argument or operation");
	  break;
	}
}
$("input").bind("click", function() {
	if($(this).val() == "0"){
		addNumber(0);
	}
	if($(this).val() == "1"){
		addNumber(1);
		
	}
	if($(this).val() == "2"){
		addNumber(2);
	}
	if($(this).val() == "3"){
		addNumber(3);
	}
	if($(this).val() == "4"){
		addNumber(4);
	}
	if($(this).val() == "5"){
		addNumber(5);
	}
	if($(this).val() == "6"){
		addNumber(6);
	}
	if($(this).val() == "7"){
		addNumber(7);
	}
	if($(this).val() == "8"){
		addNumber(8);
	}
	if($(this).val() == "9"){
		addNumber(9);
	}
	if($(this).val() == "."){
		point(".");
	}
	if($(this).val() == "+"){
		operation("+");
	}
	if($(this).val() == "-"){
		operation("-");
	}
	if($(this).val() == "*"){
		operation("*");
	}
	if($(this).val() == "/"){
		operation("/");
	}
	if($(this).val() == "C"){
		kill();
	}
	if($(this).val() == "="){
		equal();
	}
	if($(this).hasClass("=-")){
		plMn();
	}
});