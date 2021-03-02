/* Java-script assignments chapter 21 to 30

Take a input from user in number with decimal point user input is 3.4
Convert it into greater number Example: Math.ceil(3.4); to 4
Declear a variable of string and assign some text var text="This is my dummy text"
Slice the text into a new variable from 0 to the rounded number 0 to 4; Example: text.slice(0, 4) | sliceText = This
Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT
print value in alert "shiT"
Second Assignment
input value from user in String var inputValue="cloUd naTive computinG"
Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
print value in console.log() console.log(inputValue) | check result in browser console */

let input = parseFloat(prompt(`Enter decimal number\n(e.g. 3.4, 5.1, ...)`));
let inputG = Math.ceil(input);
let dummyText = `This is my dummy text`;

let slicedText = dummyText.slice(0, inputG);
let reverseText= " ";

for (let i = slicedText.length; i >= 0; i--) {
    reverseText += slicedText[i];
}
console.log(reverseText);