/* JS chapter 15 16 17
Java-script assignments chapter 15 16 17

Make a TODO
Create an empty array with the name is courses. ```example: var courses=[] ``
Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer") and save all 5 value in "courses" array. example: courses.push(course1)
print courses array in alertexample: alert(courses)
print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit) use Array.splice() to replace and edit index in array
print courses array in alertexample: alert(courses) */

let x = 0;
let courses = [];

while (x < 5) {

    this["course" + x] = prompt(`Enter course1 Name`, `JavaScript`);

    courses.push(this["course" + x]);

    x++;
}
window.alert(`All available courses \n${courses}`);
let y = 0;
while (y < 5) {

    this["course" + y] = prompt(`Course ${y + 1}`, courses[y]);

    if (this["course" + y] !== courses[y]) {

        courses.splice(y, 1, this["course" + y]);
    }
    y++;
}
window.alert(`All available courses \n${courses}`);