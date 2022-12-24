const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function yearCalculate() {
    let today = new Date();
    let inpDate = new Date(document.getElementById("Inp_date").value);
    let birthYear, birthDate, birthMonth;
    let birthDetails = {
        date: inpDate.getDate(),
        month: inpDate.getMonth() + 1,
        year: inpDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth()+1;
    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResults("-", "-", "-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = 12 + (currentMonth - birthDetails.month);
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date
    }
    else {
        birthMonth--;
        let days = month[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }

    }

    displayResults(birthDate, birthMonth, birthYear);


}
function leapChecker(year) {
    if (year % 4 === 0 && year % 100 == 0 && year % 400 == 0) {
        month[1] = 29;
    }
    else {
        month[1] = 28;
    }
}

function displayResults(bDate, bMonth, bYear) {
    document.getElementById("day").textContent = bDate;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("year").textContent = bYear;

}
