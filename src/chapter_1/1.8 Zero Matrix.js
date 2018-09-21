//Time complexity O(n^2).  Hard to avoid with matrices

export function zeroMatrix(matrix) {
  //edge cases
  if (!matrix) {
    throw new Error('invalid matrix');
  }

  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix;
  }

  //if greater than 1x1 matrix
  let rows = matrix.length;
  let cols = matrix[0].length;
  let rowtracker = new Array(rows).fill(false);
  let coltracker = new Array(cols).fill(false);

  //find zeros
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowtracker[i] = true;
        coltracker[j] = true;
      }
    }
  }

  //fill matrix with zeros
  for (let k = 0; k < rowtracker.length; k++) {
    if (rowtracker[k]) {
      //fill row
      for (let i = 0; i < matrix[0].length; i++) {
        matrix[k][i] = 0;
      }
    }
  }
  for (let l = 0; l < coltracker.length; l++) {
    if (coltracker[l]) {
      //fill column
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][l] = 0;
      }
    }
  }
  return matrix;
};