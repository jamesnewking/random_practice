function arrayFactors(inArr){
    const outObj = {};
    for(let index =0;index < inArr.length;index++){
        outObj[inArr[index]]=[];
        const evalNum = inArr[index];
        for(let check=2;check < evalNum;check++){
            if(evalNum % check === 0){
                outObj[evalNum].push(check)
            }
        }
    }
    return outObj;
}