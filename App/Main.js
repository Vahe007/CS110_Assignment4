let m = require('./Utils.js');

const mat1 = [[1, 2], [4, 5]];
const mat2 = [[5, 7], [6, 4]];

const matrix = [[1, 2], [4, 5], [11, 30]];

console.log(m.matrixProduct(mat1, mat2));
console.log(m.sumOfMatrices(mat1, mat2));
console.log(m.sumOfEachRow(matrix));

