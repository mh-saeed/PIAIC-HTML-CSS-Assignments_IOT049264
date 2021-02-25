/* Make a Calculator
input a value from user for example num1 is 7
input a second value from user for example num2 is 3
input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1 */

let num1 = parseFloat(prompt(`Enter 1st number`));

let num2 = parseFloat(prompt(`Enter 2nd number`));

let operation = prompt(`Enter operation i.e (+, -, /, *)`);
if (operation != `+` && operation != `-` && operation != `*` && operation != `/`) {
    window.alert(`Invalid entry! \n please enter only numbers in fields \nand enter operator from follwing (+, -, /, *)`);
}
else if (operation === `+` && (typeof num1) == `number` && (typeof num2) == `number`) {
    window.alert(`Addition of ${num1 + operation + num2} is: ` + (num1 + num2));
}
else if (operation === `-` && num1 && num2 && (typeof num1) == `number` && (typeof num2) == `number`) {
    window.alert(`Subtraction of ${num1 + operation + num2} is: ` + (num1 - num2));
}
else if (operation === `*` && num1 && num2 && (typeof num1) == `number` && (typeof num2) == `number`) {
    window.alert(`Multiplication of ${num1 + operation + num2} is: ` + (num1 * num2));
}
else if (operation === `/` && (typeof num1) == `number` && (typeof num2) == `number`) {
    window.alert(`Division of ${num1 + operation + num2} is: ` + (num1 / num2));
}
else {
    window.alert(`Something is wrong! \n Try again! `)

}