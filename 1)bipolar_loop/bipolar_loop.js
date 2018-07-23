function bipolar_loop(loopTimes){
    for (let upIndex=0, downIndex=0;(upIndex<loopTimes)&&(downIndex>((-1)*loopTimes));upIndex++,downIndex--){
        console.log(`Up is ${upIndex} and Down is ${downIndex}`);
    }
}