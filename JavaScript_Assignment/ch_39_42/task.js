/* Make a Percentage Calculator
Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
Calculate the grade use switch case Grade A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%
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
    let grade = "";
    let perc = (courseMarks / totalMarks) * 100;
    /* let percArr = [perc >= 90 && perc <= 100, perc >= 75 && perc <= 89, perc >= 60 && perc <= 74, perc >= 45 && perc <= 59, perc >= 30 && perc <= 44, perc >= 0 && perc <= 29]; */
    let gradeAp = perc >= 90 && perc <= 100;
    let gradeA = perc >= 75 && perc <= 89;
    let gradeB = perc >= 60 && perc <= 74;
    let gradeC = perc >= 45 && perc <= 59;
    let gradeD = perc >= 30 && perc <= 44;
    let gradeFail = perc >= 0 && perc <= 29;

    switch (gradeAp) {
        case (true):
            grade = "A+";

        default:
            break;
    }
    switch (gradeA) {
        case (true):
            grade = "A";

        default:
            break;
    }
    switch (gradeB) {
        case (true):
            grade = "B";

        default:
            break;
    }
    switch (gradeC) {
        case (true):
            grade = "C";

        default:
            break;
    }
    switch (gradeD) {
        case (true):
            grade = "D";

        default:
            break;
    }
    switch (gradeFail) {
        case (true):
            grade = "Fail";

        default:
            break;
    }



    window.alert(` You Obtained ${courseMarks} marks out of ${totalMarks} marks and\nYour Percentage is ${perc.toFixed(2)}% and your Grade is ${grade}`);

    let conf = confirm(`Click on "OK" to calculate again and "Cancel to quit!"`); // will give true if user click on ok and false if user click on cancel

    if (conf) {

        window.location.reload();

    }
}

prc(courseMarks);