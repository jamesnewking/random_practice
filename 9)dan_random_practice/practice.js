
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
    var output = [];
    for(var i=0; i< firstNames.length;i++){
        var entireName = {first:firstNames[i],last:lastNames[i]};
        output.push(entireName);
    }
    return output;
}

/*
given 2 arrays, 1 of numbers, and one of words
return an array of true and false values
true if the number and the word singular agree
false if they do not agree
for example:
input:
  [1,3,2]
  ['dogs','planes','tree']
output:
  [false, true, false]
*/

function pluralAgreement( numbers, words){
    var output = [];
    for(var i=0;i<numbers.length;i++){
        if(((numbers[i]>1 || numbers[i]===0)&& words[i][words[i].length-1]==='s') || ((numbers[i] === 1 )&& words[i][words[i].length-1]!=='s')){
            output.push(true);
        } else {output.push(false);}
    }
    return output;
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
    var output = [];
    var sorted = true;
    for(var j=0;j<wordArray.length-1;j++){
        //sorted = true;
        for(var i=0;i<wordArray.length-1;i++){
            if(wordArray[i+1].length < wordArray[i].length){
                var tempWord = wordArray[i+1];
                wordArray[i+1] = wordArray[i];
                wordArray[i] = tempWord;
                sorted = false;
            }
        }
        if(sorted){break;}
    }
    output.push(wordArray[0]);
    for(var arr=1;arr<wordArray.length;arr++){
        if(arr%2){
            output.unshift(wordArray[arr]);
        }else{
            output.push(wordArray[arr]);
        }
    }
    return output;
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
    var vowels = ['a','e','i','o','u'];
    var output = {
        vowels: 0,
        consonants: 0
    }
    for(var i = 0; i<word.length;i++){
        if(vowels.indexOf(word[i])>=0){
            output.vowels = output.vowels+1;
        } else {
            output.consonants = output.consonants+1;
        }
    }
    return output;
}

/* test code, do not change */

var testVals = [
    {
        question: `given 2 arrays, 1 of first names, and 1 of last names
return an array of objects with 1 first and last name
for each.`,
        testVals: {
            inputs: [
                [['Dan','Jane','Jack'],['Hill','Black','Mill']],
                [['Gnarl','Pokey','Smoochie', 'Joy'],['Heehaw','Gumby','Barney', 'Nguyen']]
            ],
            outputs: [
                [
                    {first: 'Dan', last: 'Hill'},
                    {first: 'Jane', last: 'Black'},
                    {first: 'Jack', last: 'Mill'}
                ],
                [
                    {first: 'Gnarl', last: 'Heehaw'},
                    {first: 'Pokey', last: 'Gumby'},
                    {first: 'Smoochie', last: 'Barney'},
                    {first: 'Joy', last: 'Nguyen'}
                ]
            ]
        },
        functionToTest: 'combineArrays'
    },
    {
        question: `given 2 arrays, 1 of numbers, and one of words
return an array of true and false values
true if the number and the animal singular agree
false if they do not agree`,
        testVals: {
            inputs: [
                [[1,3,2],['dogs','planes','tree']],
                [[1,0,2],['sled','planes','kites']]
            ],
            outputs: [
                [false, true, false],[true, true, true]
            ]
        },
        functionToTest: 'pluralAgreement'
    },
    {
        question: `write a function that takes in an array of words
order them such that they form a valley
in terms of the length of words.  
you will return them as an array.  The middlemost
elements will be the smallest, the outermost elements will be the longest`,
        testVals: {
            inputs: [
                [
                    ['canary', 'cat','tortoises','tree','a','terrific']
                ],
                [
                    ['abc', 'abcd','a','ab','abcde','abcdef']
                ]
            ],
            outputs: [
                ['tortoises', 'canary', 'cat', 'a','tree', 'terrific'],
                ['abcdef','abcd','ab','a','abc','abcde']
            ]
        },
        functionToTest: 'wordValley'
    },
    {
        question: `write a function, given a word, that returns an object
with the count of vowels and consonants in it`,
        testVals: {
            inputs: [
                [
                    'stupify'
                ],
                [
                    'supercalifragilisticexpialidocious!'
                ]
            ],
            outputs: [
                { vowels: 2, consonants: 5 },
                { vowels: 16, consonants: 18}
            ]
        },
        functionToTest: 'countLetters'
    }
]

function unitTest( testData ){
    for( var testI = 0; testI < testData.length; testI++){
        var currentTestSet = testData[testI].testVals;
        for( var ioIndex=0; ioIndex < currentTestSet.inputs.length; ioIndex++){
            var testInputs = currentTestSet.inputs[ ioIndex ];
            var jsonInputs = JSON.stringify(testInputs, null, 2);
            var testOutputs = currentTestSet.outputs[ ioIndex ];
            var result = window[testData[testI].functionToTest].apply(null, testInputs);
            var jsonResult = JSON.stringify(result, null, 2);
            var jsonAnswer = JSON.stringify(testOutputs, null, 2);
            var status = 'incorrect';
            if( jsonResult === jsonAnswer){
                status = 'correct';
            }
            displayMessage('<strong>Question '+(testI+1) + ' Test '+(ioIndex+1)+'&gt;&gt;&gt;</strong> ' + testData[testI].question,jsonInputs,  jsonAnswer,jsonResult, status);
        }
    }
}

function displayMessage( questionText, inputs, expected, answer, mode){
    debugger;
    var questionContainer = $("<div>",{
        html: questionText,
        'class': 'question'
    });
    var inputContainer = $("<div>",{
        html: '<pre class="inputs">Test Inputs:\n'+inputs+"</pre>"
    })
    var resultContainer = $("<div>",{
        'class': mode,
        text: mode.toUpperCase()+'!'
    })
    var answerContainer = $("<div>",{
        'class': mode,
        html: `<aside>Expected:</aside> <pre>${expected}</pre><aside>Your answer:</aside><pre>${answer}<pre>`
    })
    questionContainer.append(inputContainer, resultContainer, answerContainer);
    $("body").append(questionContainer);
}

unitTest( testVals );
//end of code
