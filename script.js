function createTable() {
    //Write your code here
    let rows = prompt("Input number of rows");
	let cols = prompt("Input number of columns");
	let table = document.getElementById('myTable');
	table.innerHTML = "";
	
	if(rows<=0 || cols <=0) return "";
	
	for(let i=0;i<rows;i++){
		let tr = document.createElement("tr");
		console.log("row created");
		for(let j=0;j<cols;j++){
			let td =  document.createElement("td");
			td.textContent = `Row-${i} Column-${j}`;
		    tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}

