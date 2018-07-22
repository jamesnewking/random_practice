function removeVowels(aString){
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    const tempArr = aString.split("");
    for (let index = 0; index < tempArr.length; index++){
        if(vowels.indexOf(tempArr[index]) > -1){
            tempArr.splice(index,1);
            index--;
        }
    }
    const output = tempArr.join("");
    return output;
}

function removeVowelsRegex(anotherString){
    const regex = /[aeiou]/ig;
    const output = anotherString.replace(regex,'');
    return output;
}