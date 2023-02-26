const isPrime = num => {
    for(let i = 2, s = Math.sqrt(10); i <= s; i++) {
        if(num % i === 0) return false;
    }
    console.log( num > 1)
}