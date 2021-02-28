/* JS chapter 18 19 20
Java-script assignments chapter 18 19 20

Make a TODO
Customize previous assignment "ch_15_16_17" with for loop... */



let courses = [];

for (let x = 0; x < 5; x++) {

    this["course" + x] = prompt(`Enter course ${x + 1} Name`, `e.g: Web Designing, JS, React, ReactNative, MongoDB`);

    courses.push(this["course" + x]);

}
window.alert(`All available courses \n${courses}`);

for (let y = 0; y < 5; y++) {

    this["course" + y] = prompt(`Course ${y + 1}`, courses[y]);

    if (this["course" + y] !== courses[y]) {

        courses.splice(y, 1, this["course" + y]);
    }
}
window.alert(`All available courses \n${courses}`);