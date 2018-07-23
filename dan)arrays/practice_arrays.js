/*
given 2 arrays, 1 of first names, and 1 of last names
return an array of objects with 1 first and last name
for each.
for example:
input:
   ['Dan','Jane','Jack']
   ['Hill','Black','Mill']
 output:
   [
     {first: 'Dan', last: 'Hill'},
     {first: 'Jane', last: 'Black'},
     {first: 'Jack', last: 'Mill'}
   ]
*/
function combineArrays( firstNames, lastNames){
    const outObj = [];
    for(let index = 0; index < firstNames.length;index++){
        outObj[index]={first:firstNames[index],last:lastNames[index]}
    }
    return outObj;
}

/*
given 2 arrays, 1 of numbers, and one of words
return an array of true and false values
true if the number and the animal singular agree
false if they do not agree
for example:
input:
  [1,3,2]
  ['dogs','planes','tree']
output:
  [false, true, false]
*/

function pluralAgreement( numbers, words){
    const outArr = [];
    for(let index = 0; index < words.length;index++){
        if ((numbers[index]>1 && words[index][words[index-1]]==="s")||(numbers[index]=1 && words[index][words[index-1]]!=="s")){
            outArr[index].push(true);
        } else
        {outArr[index].push(false);}
    }
    return outArr;
}

/*
write a function that takes in an array of words
order them such that they form a valley
in terms of the length of words.
you will return them as an array.  The middlemost
elements will be the smallest, the outermost elements will be the longest
for example:
input:
  ['canary', 'cat','tortoise','tree','a','terrific']
output:
  ['tortoise', 'canary', 'cat', 'a','tree', 'terrific']
*/
function wordValley( wordArray ){
    const sortedArr = wordArray.sort( (a,b)=> a.length-b.length );
    const outArr = [];
    outArr.push(sortedArr[0]);
    for(let index = 1; index < sortedArr.length; index++){
        index%2 ? outArr.unshift(sortedArr[index]) : outArr.push(sortedArr[index]);
    }
    return outArr;
}

/*
write a function, given a word, that returns an object
with the count of vowels and consonants in it
input:
    'stupify'
output:
    {
       vowels: 2,
       consonants: 5
    }
*/
function countLetters( word ){
const vowels = ['a','e','i','o','u'];
const outObj = {
    vowels: 0,
    consonants: 0
};
const regex = /[a-z]/ig;
for (let index = 0; index < word.length; index ++){
    if( regex.test(word[index]) ) {
        vowels.indexOf(word[index]) > 0 ? outObj.vowels++ : outObj.consonants++;
    }
}
return outObj;

}