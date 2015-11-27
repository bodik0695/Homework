var points = 0;

var questions = document.querySelector("form");

questions.childNodes[3].setAttribute("id","q1");
questions.childNodes[27].setAttribute("id","q2");
questions.childNodes[47].setAttribute("id","q3");

questions.childNodes[51].setAttribute("id","temp1");
questions.childNodes[55].setAttribute("id","q4");
questions.childNodes[59].setAttribute("id","temp2");
questions.childNodes[63].setAttribute("id","q5");

questions.childNodes[69].setAttribute("id","q6");
questions.childNodes[73].setAttribute("id","q7");
questions.childNodes[77].setAttribute("id","temp3");
questions.childNodes[81].setAttribute("id","temp4");

var firstResponse = document.querySelector("#q1");
var secondResponse = document.querySelector("#q2");
var theThirdResponse = document.querySelector("#q3");

var temp1 = document.querySelector("#temp1");
var fourthResponse = document.querySelector("#q4");
var temp2 = document.querySelector("#temp2");
var fifthResponse = document.querySelector("#q5");

var sixthResponse = document.querySelector("#q6");
var seventhResponse = document.querySelector("#q7");
var temp3 = document.querySelector("#temp3");
var temp4 = document.querySelector("#temp4");

function numberOfpoints(){
	points = 0;
	if(firstResponse.checked == true) {
		points += 1;
		
	}
	if(secondResponse.checked == true){
		points += 1;
	}
	if(theThirdResponse.checked == true){
		points += 1;
	}
	if(fourthResponse.checked && fifthResponse.checked == true){
		points += 0.5;
	}
	if(fourthResponse.checked || fifthResponse.checked == true){
		points += 0.5;
	}
	if(temp1.checked && fourthResponse.checked && temp2.checked == true){
		points -= 0.5;
	}
	if(temp1.checked && fifthResponse.checked && temp2.checked == true){
		points -= 0.5;
	}
	if(fourthResponse.checked && fifthResponse.checked && temp1.checked 
	|| fourthResponse.checked && fifthResponse.checked && temp2.checked == true){
		points -= 1;
	}
	if(sixthResponse.checked && seventhResponse.checked == true){
		points += 0.5;
	}
	if(sixthResponse.checked || seventhResponse.checked == true){
		points += 0.5;
	}
	if(temp3.checked && sixthResponse.checked && temp4.checked == true){
		points -= 0.5;
	}
	if(temp3.checked && seventhResponse.checked && temp4.checked == true){
		points -= 0.5;
	}
	if(sixthResponse.checked && seventhResponse.checked && temp3.checked 
	|| sixthResponse.checked && seventhResponse.checked && temp4.checked == true){
		points -= 1;
	}
	function createMessage(title, body) {
		parentElem = "";
         var container = document.createElement("div");
         container.innerHTML = "<div class='message'> \
         <h2>" + title + "</h2> \
         <div class='content'>" + body + "</div> \
         <input class='ok' type='button' value='OK'> \
         </div>";
         return container.firstChild;
      }
	var testResult = createMessage("Результат теста","Вы набрали баллов: " + points + " из 5");
	var parentElem = document.querySelector("form");
   parentElem.insertBefore(testResult, parentElem.lastChild);
	//alert("Вы набрали баллов: " + points + " из 5")
	function remResult(){
		var temp = document.querySelector("form");
		var div = document.querySelector("div");
		temp.removeChild(div);
	}
	document.querySelector(".ok").onclick = remResult;
}
document.querySelector(".result").onclick = numberOfpoints;
