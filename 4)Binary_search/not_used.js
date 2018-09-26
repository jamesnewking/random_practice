function findMatches(inArr, query){
    let firstMatchIndex = inArr.indexOf(query);
    let numberOfMatches = 0;
    if (firstMatchIndex>-1){
        let nextIndex = firstMatchIndex+1;
        numberOfMatches++;
        while (nextIndex <= inArr.length){
            if (inArr[nextIndex]===query){
                numberOfMatches++;
                nextIndex++;
            }else{
                return {firstMatchIndex: firstMatchIndex,
                    numberOfMatches: numberOfMatches};
            }
        }
    } else {
        return {firstMatchIndex: firstMatchIndex,
            numberOfMatches: numberOfMatches};
    }
}
