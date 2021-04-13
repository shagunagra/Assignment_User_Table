var n=0;
function id(){
  n++;
  return n;
}

function timeConverter(){
 var d = new Date();
 var day = d.getDay();
 var month = d.getMonth();
 var date = d.getDate();
 var year = d.getFullYear();
 var hour = d.getHours();
 var min = d.getMinutes();
 var sec = d.getSeconds();


 var get = d.toString().split(' ')[0] + " " + d.toLocaleString('default', { month: 'short' }) + " " + date + " " + year + " " + hour + ":" + min + ":" + sec;
 return get;
}



function Adduser()
{
	var table = document.getElementById('mytable');
	var name = document.getElementById('name').value;
	var city = document.getElementById('city').value;
	var degree = document.getElementById('degree').value;
	var rows = " ";

	if(name.length==0 || city == 'Enter your city' || degree.length==0){
		alert("Please Enter All the details!....")
	}else{
		rows += "<tr><td>" + name + "</td><td>" + id() + "</td><td>" + city + "</td><td>" + degree + "</td><td>" + timeConverter() + "</td></tr>";
		var tbody = document.querySelector("#mytable tbody");
	    var tr = document.createElement("tr");

	    tr.innerHTML = rows;
	    tbody.appendChild(tr);
	    document.getElementById("add").reset(); 
	    document.getElementById('add').style.display='none';
	}
}
