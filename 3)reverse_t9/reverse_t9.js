function reserse_t9(pressedKeys) {
    const inString = pressedKeys.toString();
    const mapLetter = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    }
    const outArr = [];
    for (let index=0;index<inString.length;index++){
        if(inString[index]===" "){
            continue;
        }
        if (inString[index]!==inString[index+1])
            {
                outArr.push(mapLetter[inString[index]][0]);
            } if(inString[index]==='7' || inString[index]==='9') {
                    if ((inString[index] === inString[index + 1]) && (inString[index] === inString[index + 2]) & (inString[index] === inString[index + 3])) {
                        outArr.push(mapLetter[inString[index]][3]);
                    }
                }







            else if((inString[index]===inString[index+1])&&(inString[index]===inString[index+2])){
                outArr.push(mapLetter[inString[index]][2]);
            } else {
                outArr.push(mapLetter[inString[index]][1]);
            }
        } else if (inString[index]!==inString[index+1]){
            outArr.push(mapLetter[inString[index]][0]);
        } else if ((inString[index]===inString[index+1])&&(inString[index]===inString[index+2])){
            outArr.push(mapLetter[inString[index]][2]);
        } else {
            outArr.push(mapLetter[inString[index]][1]);
        }
    }
    return outArr.join("");
}