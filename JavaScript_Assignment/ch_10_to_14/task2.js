/* Second Assignment - Make a Percentage Calculator
Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
print output in alert. */


let x = 0;

var courseMarks = 0;

while (x < 5) {

    this["course" + x] = parseFloat(prompt(`Enter course ${x + 1} Marks\n(Max marks 100)`));

    if (this["course" + x].toString() !== `NaN` && (typeof this["course" + x]) === `number` && this["course" + x] <= 100) {

        courseMarks += this["course" + x];
    }
    else {
        let conf = confirm(`Invalid entry!\n Click on "OK" for Reload the page and re-enter your marks`); // will give true if user click on ok and false if user click on cancel

        if (conf) {
            window.location.reload();
            break;
        } else {
            break;
        }
    }
    x++;
}

function prc(courseMarks) {

    let totalMarks = 500;
    let perc = (courseMarks / totalMarks) * 100;

    window.alert(`You Obtained ${courseMarks} marks out of ${totalMarks} marks and\nYour Percentage is ${perc.toFixed(2)}%`);

    let conf = confirm(`Click on "OK" to calculate again and "Cancel to quit!"`); // will give true if user click on ok and false if user click on cancel

    if (conf) {

        window.location.reload();

    }
}
if (x >= 4) {
    prc(courseMarks);

}