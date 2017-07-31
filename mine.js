var matrix = [];

var initializeMatrix = function(m,n){
	
    for(var i = 0; i < m; i++) {
        matrix.push(new Array(n).fill(0))
    }
    console.log("matrix initialized ");
};




var pageStart = function(){

	initializeMatrix(8,8);
	console.log("matrix status : " ,matrix);

};








window.onload = pageStart;