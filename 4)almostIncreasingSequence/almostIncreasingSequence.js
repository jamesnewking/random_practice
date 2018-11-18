function almostIncreasingSequence(sequence) {
    let c = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i+1]) {
            c++;
        }
        if (i+2 < sequence.length && sequence[i] >= sequence[i+2]) {
            c++;
        }
    }
    return c < 3;
}