function matrixElementsSum(matrix) {
    let result = 0;
    let haunted = {};
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                haunted[j]=0;
            }
            if(haunted[j]!==0){
                result += matrix[i][j];
            }
        }
    }
    return result;
}
