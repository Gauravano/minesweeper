var matrix = [];
var numRows;
var numCols ;
var numMines;

var display = document.getElementsByTagName("tr");

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
		a = Math.floor(a);

		var p = arr.indexOf(a);

		var x = Math.round(a%numRows);
		var y = Math.round(a/numRows);  
		
		if(p == -1 && x<8 && y<8){
			arr.push(a);
			i++;

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

var showAll = function(){

	for(var i=0;i<numRows;i++){
		var colArray = display[i].getElementsByTagName("td");
		
		for(var j=0;j<numRows;j++){
			colArray[j].innerHTML = matrix[i][j];
		}
	}

};

var afterClick = function(){

	console.log("afterClick started ");
	console.log(this);
	// console.log(this.rowIndex,"",this.cellIndex);

	// if(matrix[this.colSpan][this.cellIndex] == -1){
	// 	showAll();
	// 	console.log("mine is there ");
	// }else{
	// 	console.log("no mine");
	// }
};

function listener(){

	console.log("Enter listener ");
	
	for(var i=0;i<numRows;i++){
		var colArray = display[i].getElementsByTagName("td");
		
		for(var j=0;j<numRows;j++){
			colArray[j].addEventListener("click",function(){
				console.log(this);
				console.log(i,this.cellIndex);
			});
		}
	}
	
}

var pageStart = function(){

	initialization();
	console.log("matrix status : " ,matrix);
	placingMines();
	generateNeighbourNum();
	listener();
};





window.onload = pageStart;