var matrix = [];
var numRows;
var numCols ;
var numMines;

var initialization = function(){
	numRows = 8;
	numCols = 8;
	numMines = numRows;

    for(var i = 0; i < numRows; i++) {
        matrix.push(new Array(numCols).fill(0))
    }
    console.log("matrix initialized ");
};


var placingMines = function(){

	// for(int i = 0;i<numRows;i++){
	// 	for(int j=0;j<numCols;j++){

	// 	}
	// }

	var arr = [];

	var i=0;
	while(i < numMines){
		var a = Math.random()*64;

		var p = arr.indexOf(a);
		
		if(p == -1){
			arr.push(a);
			i++;
		

		x = Math.round(a%numRows);
		y = Math.round(a/numRows);  

		matrix[x][y] = -1;
	}
}

	console.log("matrix after mines : ",matrix);
};


var pageStart = function(){

	initialization();
	console.log("matrix status : " ,matrix);
	placingMines();
};








window.onload = pageStart;