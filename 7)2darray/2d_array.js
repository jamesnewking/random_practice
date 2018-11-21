'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let total = -10000000;
    let maxTot = -10000000;

    for (let z = 0; z < arr.length - 2; z++) {
        for (let y = 0; y < arr.length - 2; y++) {

            for (let i = 0 + z; i < 3 + z; i++) {
                for (let j = 0 + y; j < 3 + y; j++) {
                    if ((i === z + 1) && (j === y)) {
                        continue;
                    }
                    if ((i === z + 1) && (j === y+2)) {
                        continue;
                    }
                    //if (((i === 1+z) && (j === y)) || ((i === 1+z) && (j === y+2))){
                    //   continue;
                    //}
                    
                    total = total + parseInt( arr[i][j] );
                }
            }
            if(total > maxTot) {
                maxTot = total;
            }
            total = 0;

        }
    }
    return maxTot;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
