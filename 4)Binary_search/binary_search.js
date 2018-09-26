/* 
* Input:
*   inArr - An input array of integers. 
*   query - Desired match value. 
* 
* Output: 
*   a object with:
*   {   firstMatchIndex : Array index of the first match, or -1 if no matches,
*       numberOfMatches : Number of instances of the query value in the array
*   }
*   
*/

var inArr = [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9];

function findMatches(inArr, query){
    let firstMatchIndex = inArr.indexOf(query);
    //firstMatchIndex is the smallest index of the first time the query is found in the array
    let numberOfMatches = 0;
    if (firstMatchIndex>-1){
        //if firstMatchIndex is > -1, then the query is in the array and go find the last time the query
        //was seen in the array
        numberOfMatches = inArr.lastIndexOf(query) - firstMatchIndex + 1;
        //need to add 1 to numberOfMatches calculation because array starts at 0
        return {
            firstMatchIndex: firstMatchIndex,
            numberOfMatches: numberOfMatches
        }
    } else {
        return {
            firstMatchIndex: firstMatchIndex,
            numberOfMatches: numberOfMatches
        };
    }
}

function findMatchesV2(inArr, query) {
    let minIndex = 0;
    let maxIndex = inArr.length - 1;
    let currentIndex;
    let currentElement;
    let firstMatchIndex = -1;
    let numberOfMatches = 0;
    while (minIndex <= maxIndex) {
        //binary search through the array
        currentIndex = Math.floor( (minIndex + maxIndex) / 2);
        //middle index of the array
        currentElement = inArr[currentIndex];
        if (currentElement < query) {
            minIndex = currentIndex + 1;
            //setting the minIndex to the right side of currentIndex for search
        }
        else if (currentElement > query) {
            maxIndex = currentIndex - 1;
            //setting the maxIndex to the left side of currentIndex for search
        }
        else {
            //we have a match, but need to determine how many times it matched
            numberOfMatches++;
            while (inArr[currentIndex]===inArr[currentIndex-1]){
                //checking how many times the query existed before the first match
                numberOfMatches++;
                currentIndex--;
            }
            firstMatchIndex = currentIndex;
            while (inArr[currentIndex+numberOfMatches-1]===inArr[currentIndex+numberOfMatches]){
                //checking how many times the query exists after the first match
                numberOfMatches++;
            }
            return {
                firstMatchIndex: firstMatchIndex,
                numberOfMatches: numberOfMatches
            };
        }
    }
    return {
        firstMatchIndex: firstMatchIndex,
        numberOfMatches: numberOfMatches
    };
}