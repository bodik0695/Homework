 var firstQuestion = $("input.link");
  var secondQuestion = $("input.listt");
   var thirdQuestion = $("input.information");
	 var fourthQuestion = $("input.table");
	  var fifthQuestion = $("input.form");
function numberOfpoints(){
	var result = 0;
	var temp1 = 0;
	var temp2 = 0;
	//questions: 1 - 3
	if($(firstQuestion).eq(0).prop("checked") == true){
		result += 1;
		
	}
	if($(secondQuestion).eq(2).prop("checked") == true){
		result += 1;
		
	}
	if($(thirdQuestion).eq(3).prop("checked") == true){
		result += 1;
		
	}
	//question 4
	if($(fourthQuestion).eq(0).prop("checked") == true){
		temp1 -= 0.5;
		
	}
	if($(fourthQuestion).eq(1).prop("checked") == true){
		temp1 += 0.5;
		
	}
	if($(fourthQuestion).eq(2).prop("checked") == true){
		temp1 -= 0.5;
		
	}
	if($(fourthQuestion).eq(3).prop("checked") == true){
		temp1 += 0.5;
		
	}
	//question 5
	if($(fifthQuestion).eq(0).prop("checked") == true){
		temp2 += 0.5;
		
	}
	if($(fifthQuestion).eq(1).prop("checked") == true){
		temp2 += 0.5;
		
	}
	if($(fifthQuestion).eq(2).prop("checked") == true){
		temp2 -= 0.5;
		
	}
	if($(fifthQuestion).eq(3).prop("checked") == true){
		temp2 -= 0.5;
		
	}
	if(temp1 > 0){
		result += temp1;
	}
	if(temp2 > 0){
		result += temp2;
	}
	function createMessage(title, body) {
		var temp = document.querySelector("form");
		var div = temp.querySelector("div");
		if(div === null){
		
         var container = document.createElement("div");
         container.innerHTML = "<div class='message'> \
         <h2>" + title + "</h2> \
         <div class='content'>" + body + "</div> \
         <input class='ok' type='button' value='OK'> \
         </div>";
         return container.firstChild;
		}
		else{}
     }
	var testResult = createMessage("Результат теста","Вы набрали баллов: " + result + " из 5");
	var parentElem = document.querySelector("form");
   parentElem.insertBefore(testResult, parentElem.firstChild);
	function remResult(){
		var temp = document.querySelector("form");
		var div = temp.querySelector("div");
		temp.removeChild(div);
	} 
	document.querySelector(".ok").onclick = remResult;
}
$("input").bind("click", function() {
	if($(this).hasClass("result")) {
		numberOfpoints();
	}
 });