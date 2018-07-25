function permutations(inStr) {
    const outArr = [];
    for (let index=0;index < inStr.length;index ++){
        for (let inner=0;inner<2;inner++){
            const inArr = inStr.split("");
            const tempArr = [];
            tempArr.push(inArr[index]);
            inArr.splice(index,1);
            if(!inner){
                tempArr.push(inArr[0]);
            } else {
                tempArr.push(inArr[inner]);
            }
            tempArr.push(inArr[0]);
            outArr.push(tempArr.join(""));
        }
    }
    console.log(outArr);
}