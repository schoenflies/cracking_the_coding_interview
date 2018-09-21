function rotateMatrix(matrix){
	var rows=matrix.length;
	var cols=matrix[0].length;

  //reverse indices
  for(let i=0; i<rows; i++){
  	for(let j=0; j<cols; j++){
  		let tmp=matrix[j][cols-i-1];
  		console.log(tmp)
  		matrix[j][cols-i-1]=matrix[i][j];
  		matrix[i][j]=tmp;
  	}
  }
  return matrix;
}

/* TEST */
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];
console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);