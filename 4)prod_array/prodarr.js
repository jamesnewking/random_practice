// input an array of integers, write a function that outputs an array of integers of the same length as the input
// with the value of the product of all the number that is not the number at that position


function prodArr(arr){
    let output = [];
    let product = null;
    for (let i = 0; i < arr.length; i++){
        if(parseInt(arr[i])===0){
            continue;
        }
        if (product === null){
            product = 1;
        }
        product = product * arr[i];
    }
    for (let j=0;j<arr.length;j++){
        if(parseInt(arr[j])===0){
            output.push(product);
            continue;}
        output.push(product/arr[j]);
    }
    return output;
}

let arr = [1,4,6,8];
let zeroArr = [1,0,-9,9];