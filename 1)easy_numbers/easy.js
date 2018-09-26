
function findLargestNumber( num1, num2, num3 ){
    let maxNum = null;
    if ( arguments.length === 0 ){
        return null;
    } else if ( !isNaN(arguments[0]) && arguments.length === 1 ){
        return arguments[0];
    }
    if ( !isNaN(arguments[0])){maxNum = arguments[0];}
    for ( let i=0; i< arguments.length; i++ ){
        if ( !isNaN(arguments[i]) && arguments[i]>maxNum ){
            maxNum = arguments[i];
        }
    }
    return maxNum;
}