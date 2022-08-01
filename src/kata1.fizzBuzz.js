const fizzBuzz = number => {
    const isDivisible = (n) => number % n === 0;
    const isDivisibleBy3 = isDivisible(3);
    const isDivisibleBy5 = isDivisible(5);
    
    if (isDivisibleBy3) {
        if (isDivisibleBy5) {
            return 'FizzBuzz'
        }
        return 'Fizz'
    } if (isDivisibleBy5) {
        return 'Buzz'
    }
    return number
};

module.exports = fizzBuzz;
