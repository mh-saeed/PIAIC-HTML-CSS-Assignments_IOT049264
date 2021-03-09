/* Second Assignment
User input value in Number through prompt Example value=5
Factorialize a Number use Function
print value in console.log() console.log(value); the result is 120 */

let number = parseInt(prompt(`Enter a number`));

function factor(num) {
    if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factor(num - 1));
    }
}
console.log(`Factor of ${number} is `+ factor(number));