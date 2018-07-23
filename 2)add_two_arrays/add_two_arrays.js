function addTwoArrays(in1Arr,in2Arr){
    const outArr = [];
    for (let index=0;index<in1Arr.length;index++){
        outArr.push(in1Arr[index] + in2Arr[index]);
    }
    return outArr;
}