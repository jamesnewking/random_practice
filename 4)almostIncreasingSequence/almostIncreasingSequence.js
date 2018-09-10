function almostIncreasingSequence(sequence){
    let result = true;
    for (let skip=0;skip<sequence.length;skip++){
        result = true;
        let tempArr = sequence.slice();
        tempArr.splice(skip,1);
        console.table(tempArr);
        for (let i=0;i<tempArr.length;i++){
            if(tempArr[i+1]<=tempArr[i]){
                result = false;
            }
        }
        if (result){
            return result;
        }
    }
    return result;
}