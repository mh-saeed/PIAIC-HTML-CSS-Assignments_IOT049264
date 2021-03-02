/* Second Assignment
input value from user in String var inputValue="cloUd naTive computinG"
Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
print value in console.log() console.log(inputValue) | check result in browser console  */

let inputValue = prompt(`Enter String.`);


var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(); // this will only capatilize first letter of first letter in string

console.log(capitalizeString(inputValue));



let capitalizeWord = inputValue.split(` `).map(capitalizeString);// will split the string from each and every space into array and then will capatilize the first letter of every element is array using .map(capitalizeString)

let capitalizeSentence = capitalizeWord.join(` `); // this will rejoin the string from where it was splited

console.log(capitalizeSentence);