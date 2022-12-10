// var isPalindrome = function(x) {
//     if (x < 0) return false;
	
//     // reverse the string representation of x
//     const reverse = `${x}`.split('').reverse().join('');
//     // compare the value regardless of types
//     return x == reverse;
// };

// console.log(isPalindrome(191));

var isPalindrome = function(x) { 
    let numGiven =x;
let rev = 0;
while(x !== 0){
    let n = x % 10;
    rev = rev * 10 + n;
    x = Math.floor(x / 10);
}
return rev == numGiven;
}

console.log(isPalindrome(0));