function sum(a) {
    return function(b) {
        return a + b;
    }
}

const result = sum(2)(2);
console.log(result); // 5