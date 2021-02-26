/* Second Assignment - Make a Percentage Calculator
Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
print output in alert. */



let course1 = parseFloat(prompt(`Enter JS marks. (max marks 100)`));

if (course1.toString() !== `NaN` && (typeof course1) === `number` && course1 <= 100) {

    let course2 = parseFloat(prompt(`Enter Docker marks. (max marks 100)`));

    if (course2.toString() !== `NaN` && (typeof course2) === `number` && course2 <= 100) {

        let course3 = parseFloat(prompt(`Enter Kubernetes marks. (max marks 100)`));

        if (course3.toString() !== `NaN` && (typeof course3) === `number` && course3 <= 100) {

            let course4 = parseFloat(prompt(`Enter HTML & CSS marks. (max marks 100)`));

            if (course4.toString() !== `NaN` && (typeof course4) === `number` && course4 <= 100) {

                let course5 = parseFloat(prompt(`Enter React marks. (max marks 100)`));

                if (course5.toString() !== `NaN` && (typeof course5) === `number` && course5 <= 100) {

                    let totalMarks = 500;
                    let obtMarks = (course1 + course2 + course3 + course4 + course5);
                    let perc = (obtMarks / totalMarks) * 100;

                    window.alert(`Your Obtained ${obtMarks} out of ${totalMarks} and\nYour Percentage is ${perc.toFixed(3)}`);

                    let conf = confirm(`Do you want to calculate again?\n if yes then click on "ok" or if then click on "cancel"`); // will give true if user click on ok and false if user click on cancel

                    if (conf) {
                        location.reload();
                    }

                }
                else {

                    let conf = confirm(`Invalid entry!\n Click on "OK" for Reload the page and re-enter your marks`); // will give true if user click on ok and false if user click on cancel

                    if (conf) {
                        location.reload();
                    }
                }

            }
            else {

                let conf = confirm(`Invalid entry!\n Click on "OK" for Reload the page and re-enter your marks`); // will give true if user click on ok and false if user click on cancel

                if (conf) {
                    location.reload();
                }
            }

        }
        else {

            let conf = confirm(`Invalid entry!\n Click on "OK" for Reload the page and re-enter your marks`); // will give true if user click on ok and false if user click on cancel

            if (conf) {
                location.reload();
            }
        }

    }
    else {

        let conf = confirm(`Invalid entry!\n Click on "OK" for Reload the page and re-enter your marks`); // will give true if user click on ok and false if user click on cancel

        if (conf) {
            location.reload();
        }
    }

}
else {

    let conf = confirm(`Invalid entry!\n Click on "OK" for Reload the page and re-enter your marks`); // will give true if user click on ok and false if user click on cancel

    if (conf) {
        location.reload();
    }
}