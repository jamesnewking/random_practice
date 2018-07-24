function numeric_toggles(num){
    outArr = [];
    let lastNum = num;
    let sign = 1;
    for (let index=2;index < 6;index++){
        for (let inner=0;inner<2;inner++){
            index%2===0 ? sign = 1 : sign = (-1);
            outArr.push(sign*(lastNum+index));
            lastNum = lastNum + index;
        }
    }
    return outArr;
}