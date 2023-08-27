/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  // if (n<=1){
  //   return false;
  // }
  // for (let i=2; i<n; i++){
  //   if (n%i == 0){
  //     return false;
  //   }
  // }

  // return true;

  if (n<=1){
    return false;
  } else if (n%2 == 0 && 2<n){
    return false;
  } else {
    return true;
  }
}

console.log(isPrime(4));
console.log(isPrime(1));
