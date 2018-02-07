 

function mainMsg(e)
{
	//console.log(e.data);
	var xhr = new XMLHttpRequest(),
	output,
	noOfUnit = e.data;

 	xhr.addEventListener('load',function(res){
		//console.log(res);
		var resp = JSON.parse(xhr.responseText);
		//console.log(resp);
		output = noOfUnit*resp.rates.INR;
		self.postMessage(output);
 	});

  xhr.open('GET','http://api.fixer.io/latest?base=USD&symbols=INR',true);
  xhr.send();
  

}

function errorHandler(e)
{
  console.log(e.message,e);
}

self.addEventListener("message",mainMsg,true);
self.addEventListener("error",errorHandler,true);
