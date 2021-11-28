module.exports = {

    matrixProduct: function(mat1, mat2) {
        let result = [];

        for (let i = 0; i < mat1.length; i++) {
            result[i] = [];
            for (let j = 0; j < mat2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < mat1[0].length; k++) {
                    sum += mat1[i][k] * mat2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    },



    sumOfMatrices: function(mat1, mat2) {

        const result = [];
        for (let i = 0; i < mat1.length; i++) {
            const arr = [];
            for (let j = 0; j < mat1[i].length; j++) {
                arr.push(mat1[i][j] + mat2[i][j]);
            }
            result.push(arr);
        }
        return result;
    },





    sumOfArray: function(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },



    sumOfEachRow: function(mat) {
        const result = [];
        for (let i = 0; i < mat.length; i++) {
            let sum = this.sumOfArray(mat[i]);
            result.push(sum);
        }
        return result;
    }

}