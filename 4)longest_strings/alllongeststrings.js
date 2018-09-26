function allLongestStrings(inputArray) {
    let outputArr = [];
    outputArr.push(inputArray[0]);
    for (let i=1;i<inputArray.length;i++){
        if(inputArray[i].length>outputArr[0].length){
            outputArr=[];
            outputArr.push(inputArray[i]);
        }
        else if(inputArray[i].length===outputArr[0].length){
            outputArr.push(inputArray[i]);
        }

    }

    return outputArr;
}
