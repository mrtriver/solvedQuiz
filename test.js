

let findGcd = (number1, number2) => {
  var divisors;
  if (number1 === number2) {
    divisors = number1;
    return divisors;
  } else if (number1 < number2) {
    for (var i = 1; i <= number1; i++) {
      if (number1 % i == 0 && number2 % i == 0) {
        divisors = i;
        
      }
    }
  }
  return divisors;
};




const isPrimeFunc = (input) => {
  let isPrime = true;
  for (let i = 2; i < (input - 1); i++) {
      if (input % i == 0) {
          isPrime = false;
          break;
      }
  }

  return isPrime;
}

function prime_factors(num) {
  const resultSet = new Set();
  for (let i = 2; i <= num; i++) {
      if (
          isPrimeFunc(i)
          && num % i === 0
      ) {
          resultSet.add(i)
          num /= i;
      }
  }
  return [...resultSet];
}


let gcd = findGcd(14,30);
let isPrm = isPrimeFunc(gcd);
console.log(isPrm);
console.log(gcd);