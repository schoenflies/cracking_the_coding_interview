//Time complexity O(n^2).  Hard to avoid with matrices

function zeroMatrix(matrix){
  let rows=matrix.length;
  let cols=matrix[0].length;
  let rowtracker=new Array(rows).fill(false);
  let coltracker=new Array(cols).fill(false);

  //find zeros
  for(let i=0; i<rows; i++){
  	for(let j=0; j<cols; j++){
  		if(matrix[i][j]===0){
  			rowtracker[i]=true;
  			coltracker[j]=true;
  		}
  	}
  }

  //fill matrix
  for(let k=0; k<rowtracker.length; k++){
  	if(rowtracker[k]){
  		//fill row
  		for (let i=0; i<matrix[0].length; i++){
  			matrix[k][i]=0;
  		}
  	}
  }
  for(let l=0; l<coltracker.length; l++){
  	if(coltracker[l]){
  		//fill column
  		for (let j=0; j<matrix.length; j++){
  			matrix[j][l]=0;
  		}
  	}
  }
}

// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

var printMatrix = function(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
};

console.log('before');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]