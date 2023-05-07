function printNumbers(start, end) {
    let currentNumber = start;
    const intervalId = setInterval(function() {
        console.log(currentNumber);
        currentNumber++;
        if (currentNumber > end) {
            clearInterval(intervalId);
        }
    }, 1000);
}
printNumbers(5, 15);
