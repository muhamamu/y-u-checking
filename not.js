function isPrime(number) {
    // Handle edge cases
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    // Check divisibility from 5 to square root of number
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(17)); 
console.log(isPrime(10)); 
