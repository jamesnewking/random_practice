function randomize_array(inArr){
    const outArr = [];
    for(let index=0;index < inArr.length; index){
        const randomNum = Math.floor(Math.random()*inArr.length);
        outArr.push(inArr.splice(randomNum,1)[0]);
    }
    return outArr;
}