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

	var arr = [];

	var i=0;
	while(i < numMines){
		var a = Math.random()*64;
		a = Math.round(a);

		var p = arr.indexOf(a);
		
		if(p == -1){
			arr.push(a);
			i++;

		var x = Math.round(a%numRows);
		var y = Math.round(a/numRows);  

		matrix[x][y] = -1;
	}
}

	console.log("matrix after mines : ",matrix);
};

var generateNeighbourNum = function(){
	for(var i=0;i<numRows;i++){
		for(var j=0;j<numCols;j++){
			var count = 0;
			
			if(matrix[i][j] == -1){
				continue;
			}
			else if(i == 0 && j==0){
				if(matrix[i+1][j] == -1){
					count++;
				}
				if(matrix[i][j+1]== -1){
					count++;
				}
				if(matrix[i+1][j+1]== -1){
					count++;
				}


			}

			else if(i == 0 && j== numRows-1){
				if(matrix[i][j-1] == -1){
					count++;
				}
				if(matrix[i+1][j-1]== -1){
					count++;
				}
				if(matrix[i+1][j]== -1){
					count++;
				}

			}
			else if(i == numRows-1 && j== numRows-1){
				if(matrix[i-1][j] == -1){
					count++;
				}
				if(matrix[i-1][j-1]== -1){
					count++;
				}
				if(matrix[i][j-1]== -1){
					count++;
				}

			}

			else if(i == numRows-1 && j== 0){
				if(matrix[i-1][j] == -1){
					count++;
				}
				if(matrix[i-1][j+1]== -1){
					count++;
				}
				if(matrix[i][j+1]== -1){
					count++;
				}

			}
			else if(i == 0 && j>0 ){
				if(matrix[i][j-1] == -1){
					count++;
				}
				if(matrix[i][j+1]== -1){
					count++;
				}
				if(matrix[i+1][j-1]== -1){
					count++;
				}
				if(matrix[i+1][j]== -1){
					count++;
				}
				if(matrix[i+1][j+1]== -1){
					count++;
				}

			}

			else if(i == numRows-1 && j>0 ){
				if(matrix[i][j-1] == -1){
					count++;
				}
				if(matrix[i-1][j-1]== -1){
					count++;
				}
				if(matrix[i-1][j]== -1){
					count++;
				}
				if(matrix[i-1][j+1]== -1){
					count++;
				}
				if(matrix[i][j+1]== -1){
					count++;
				}

			}
			else if(i > 0 && j==0 ){
				if(matrix[i-1][j] == -1){
					count++;
				}
				if(matrix[i-1][j+1]== -1){
					count++;
				}
				if(matrix[i][j+1]== -1){
					count++;
				}
				if(matrix[i+1][j+1]== -1){
					count++;
				}
				if(matrix[i+1][j]== -1){
					count++;
				}

			}

			else if(i > 0 && j==numRows-1 ){
				if(matrix[i-1][j] == -1){
					count++;
				}
				if(matrix[i-1][j-1]== -1){
					count++;
				}
				if(matrix[i][j-1]== -1){
					count++;
				}
				if(matrix[i+1][j-1]== -1){
					count++;
				}
				if(matrix[i+1][j]== -1){
					count++;
				}

			}
			else{
				if(matrix[i-1][j-1] == -1){
					count++;
				}
				if(matrix[i-1][j]== -1){
					count++;
				}
				if(matrix[i-1][j+1]== -1){
					count++;
				}
				if(matrix[i][j-1]== -1){
					count++;
				}
				if(matrix[i][j+1]== -1){
					count++;
				}
				if(matrix[i+1][j-1]== -1){
					count++;
				}
				if(matrix[i+1][j]== -1){
					count++;
				}
				if(matrix[i+1][j+1]== -1){
					count++;
				}


			}

			matrix[i][j] = count;											


		}
	}

	console.log("After neighbours",matrix);
};


var pageStart = function(){

	initialization();
	console.log("matrix status : " ,matrix);
	placingMines();
	generateNeighbourNum();
};








window.onload = pageStart;