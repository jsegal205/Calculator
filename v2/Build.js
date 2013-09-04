function Build(){
	createDIV();
}

function createDIV(){
	var body = document.getElementById("Canvas");
	var tbl = document.createElement("table");
	var tblbody = document.createElement("tbody");
	var row = document.createElement("tr");
	var cell = document.createElement("td");
	var div = document.createElement('div');

	div.setAttribute("id", "window");
	div.innerHTML = "&nbsp";
	div.setAttribute("onClick", function() {alert()});
	div.style.backgroundColor = "Green";
	cell.setAttribute("height", "20px");
	
	cell.appendChild(div);
	row.appendChild(cell);
	tblbody.appendChild(row);
	tbl.appendChild(tblbody);
	body.appendChild(tbl);
}
