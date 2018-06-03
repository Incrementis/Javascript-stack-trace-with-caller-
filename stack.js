/*
	====================================================================================================
	
	NOTE:
	The code below serves only demonstration purposes.
	
	The use of global variables is not recommended, due to higher risk of errors. 
	
	====================================================================================================
*/



/*
	==============
	NONE-RECURSION
	==============
	
	All three functions (A,B and C) should be equal in their definition.
	The mentioned functions should be able to take two callback functions as parameters.
	They should be able to check which position they have.
	Depending on that position, a nested callback function should be called,
	or the javascript method "caller" should be activated.
	
*/
//*
var list = [];


function A(position, two, one)
{
	if(position === 1)
	{
		two(position-1, null, one);
	}
	else if(position === 0)
	{
		one(position-1, null, null)
	}
	else
	{
		for(var f = A.caller; f; f = f.caller)
		{
			list.push(f);
		}
	}
	
}	


function B(position, two, one)
{
	if(position === 1)
	{
		two(position-1, null, one);
	}
	else if(position === 0)
	{
		one(position-1, null, null)
	}
	else
	{
		for(var f = B.caller; f; f = f.caller)
		{
			list.push(f);
		}
	}

}


function C(position, two, one)
{
	if(position === 1)
	{
		two(position-1, null, one);
	}
	else if(position === 0)
	{
		one(position-1, null, null)
	}
	else
	{
		for(var f = C.caller; f; f = f.caller)
		{
			list.push(f);
		}
	}

}


//Purpose: Calls randomly the function "A", "B" or "C"
function RandomCall()
{
	var info	= document.getElementById('result');
	var te 		= "Please press 'F12' in google chrome to activate the debugging tools.";
	var xt		= " There in the tab 'Console' it should be seen that it worked.";
	
	//Reset array
	list.length = 0;
	
	
	//Generating a random number from 1 to 6 
	var random = Math.floor((Math.random() * 6) +1);
	
	if(random === 1)
	{
		A(1, B, C);
	}
	else if(random === 2)
	{
		A(1, C, B);
	}
	else if(random === 3)
	{
		B(1, A, C);
	}
	else if(random === 4)
	{
		B(1, C, A);
	}
	else if(random === 5)
	{
		C(1, A, B);
	}
	else if(random === 6)
	{
		C(1, B, A);
	}
	
	
	info.style.backgroundColor = "white";
	
	info.innerHTML = te+xt;
	
	console.log(list);
}

//*/



/*
	=========
	RECURSION 
	=========
*/
//*
var listRecursion = [];

function D(position)
{
	if(position === 0)
	{
		for(var f = D.caller; f; f = f.caller)
		{
			listRecursion.push(f);
		}
		
	}
	else if(position !== 0)
	{
		D(position-1)
	}

}


//Purpose: Calls the recursive function "D"
function BuggyCall()
{
	
	
	var info	= document.getElementById('result');
	var te 		= "!!!!!For this to work,please comment out the call of the function 'D' within the function 'BuggyCall'.";
	var xt		= "Be highly aware that this will probably crash your web browser after pressing button 'BUGGY'!!!!!!!!!";
	
	info.style.backgroundColor = "orange";
	
	//Reseting array
	listRecursion.length = 0;
	
	
	//ATTENTION:
	//Please, comment oout "D(1)" only if you know what you are doing!
	
	//D(1);
	
	console.log(listRecursion);
	
	info.innerHTML = te+xt;
}
//*/