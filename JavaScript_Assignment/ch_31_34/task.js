/* ava-script assignments chapter 31 to 34

input your name through prompt. for example name is "Ameen Alam"

input your DOB(date) through prompt. for example date is "24"

input your DOB(month) through prompt. for example month is "05"

input your DOB(year) through prompt. for example year is "1999"

print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"

print meassage in console.log() "Your DOB is {in pakistan standard time format}"

print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"

"Your Age in Days 7510"

print meassage in console.log() "How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam. Today is Your 20th Birthday" */

let name = prompt(`Enter your name`);
let date = parseInt(prompt(`Enter your DOB(date)`));
let month = parseInt(prompt(`Enter your DOB(month)`));
let year = parseInt(prompt(`Enter your DOB(year)`));

var dateCurrent = new Date();

function dayPeriod(dateParam) {

    if (dateParam.getHours() < 12 && dateParam.getHours() > 0) {

        console.log(`Hello ${name}, Good Morning.`);

    }
    else if (dateParam.getHours() >= 12 && dateParam.getHours() < 18) {

        console.log(`Hello ${name}, Good AfterNoon.`);

    }
    else if (dateParam.getHours() >= 18 && dateParam.getHours() <= 24) {

        console.log(`Hello ${name}, Good Night.`);

    }
}

function dob(y, m, d) {

    let myDOB = new Date(y, m - 1, d);
    
    console.log(`Your DOB is ` + myDOB);
    
    console.log(`You are ${(dateCurrent.getFullYear()-myDOB.getFullYear())} years ${dateCurrent.getMonth()+1} Month ${dateCurrent.getDay()} Days ${dateCurrent.getHours()} Hours ${dateCurrent.getMinutes()} Minutes ${dateCurrent.getSeconds()} Seconds old"`);

    console.log(`Your Age in Days ${(dateCurrent.getTime()- myDOB.getTime())/(1000*60*60*24)}`);


}

dayPeriod(dateCurrent);
dob(year, month, date);
