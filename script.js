function createTable() {
    //Write your code here
    let rows = prompt("Input number of rows");
	let cols = prompt("Input number of columns");

	if(rows<=0 || cols <=0) return "";
	
	for(let i=0;i<rows;i++){
		let rowHTML = `<tr>`;
		console.log("row created");
		for(let j=0;j<cols;j++){
			rowHTML += `<td>Row-${i} Column-${j}</td>`;
		}
		rowHTML += `</tr>`;
		table.innerHTML += rowHTML;
	}
}

let table = document.getElementById('myTable');
table.innerHTML = "";