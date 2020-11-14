//to fetch expression from the output screen expression section
function getExpression()
{
	return document.getElementById("equation").innerText;
}

// to fetch result from the output screen
function getResult()
{
	return document.getElementById("result").innerText;
}

//to add element and empty the expession section if expression cotains the value "Expression".
function emptyExpression()
{
	document.getElementById("equation").innerText="";
	document.getElementById("equation").style.color= "#080737";
}

//to add operators to the expession on the output screen expression section
function addOperatorToScreen(val)
{
	if(getExpression()=="Expression")
		emptyExpression();
	
	if(getResult()!="Result")
	{	
		document.getElementById("equation").innerText="";
		document.getElementById("equation").innerText+= getResult();
		document.getElementById("result").innerText="Result";
		document.getElementById("result").style.color= "#D5D8DC";
	}

	document.getElementById("equation").innerText+= val;
}

//to add numbers to the expession on the output screen expression section
function addNumberToScreen(val)
{
	if(getExpression()=="Expression")
		emptyExpression();

	if(getResult()!="Result")
	{	
		document.getElementById("equation").innerText="";
		document.getElementById("result").innerText="Result";
		document.getElementById("result").style.color= "#D5D8DC";
	}

	document.getElementById("equation").innerText+= val;
}

//to clear the output section (expression and result section)
function clearScreen()
{
	document.getElementById("equation").innerText= "Expression";
	document.getElementById("equation").style.color= "#D5D8DC";
	document.getElementById("result").innerText= "Result";
	document.getElementById("result").style.color= "#D5D8DC";
}


//to delete a single character from the end of the equation
function backspaceExpression()
{	
	if(getExpression()!="Expression")
	{
	  let length= getExpression().length;
	  if(length!=0)
	  {
	    let expression= document.getElementById("equation").innerText;
	    expression= expression.substring(0,--length);
	    document.getElementById("equation").innerText= expression;
	  }

	  if(length==0)
	  {
	   document.getElementById("equation").innerText= "Expression";
	   document.getElementById("equation").style.color= "#D5D8DC";
	  }
	}
}


//to print the result of the equation on the output screen result section
function output()
{
	let result= eval(document.getElementById("equation").innerText);
	document.getElementById("result").innerText= result;
	document.getElementById("result").style.color= "#080737";
}


//to trace clicked button
document.getElementById("clear").addEventListener("click",clearScreen);
document.getElementById("backspace").addEventListener("click",backspaceExpression);
document.getElementById("divide").addEventListener("click",(e)=>{addOperatorToScreen("/")});
document.getElementById("multiply").addEventListener("click",(e)=>{addOperatorToScreen("*")});
document.getElementById("equal").addEventListener("click",output);

var i,numButtons= document.querySelectorAll(".number"), optButtons= document.querySelectorAll(".operator");

for(i=0;i<numButtons.length;i++)
{
	numButtons[i].addEventListener("click",(e)=>{addNumberToScreen(e.target.innerText)});
}

for(i=0;i<optButtons.length;i++)
{
	optButtons[i].addEventListener("click",(e)=>{addOperatorToScreen(e.target.innerText)});
}