function reverse_t9(pressedKeys) {
    const inString = pressedKeys.toString();
    const mapLetter = {
        "1": [' '],
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
        if(inString[index]==="7" || inString[index]==="9"){
            //check for 7 or 9 since they have an additional outcome
            if(inString[index]===inString[index+1] && inString[index]===inString[index+2] && inString[index]===inString[index+3]){
                outArr.push(mapLetter[inString[index]][3]);
                index = index + 3;
            }
        }
        if (inString[index]===inString[index+1] && inString[index]===inString[index+2]){
            outArr.push(mapLetter[inString[index]][2]);
            index = index + 2;
            continue;
        } else if (inString[index]===inString[index+1]){
            outArr.push(mapLetter[inString[index]][1]);
            index++;
            continue;
        } else {
            outArr.push(mapLetter[inString[index]][0]);
        }
    }
    return outArr.join("");
}