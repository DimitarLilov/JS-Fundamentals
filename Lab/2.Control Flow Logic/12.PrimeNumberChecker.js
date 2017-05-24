function isPrime(num) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
   console.log(prime && (num > 1));
}

isPrime(7);
isPrime(8);
isPrime(81);