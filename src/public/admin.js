// const { get } = require("mongoose");


document.getElementById('trimester1StartingDate').value = getCookie("Tri1StartDate");
document.getElementById('trimester1EndingDate').value = getCookie("Tri1EndDate");
document.getElementById('trimester1StartingDayBlock').value = getCookie("Tri1StartDateBlock");


document.getElementById('trimester2StartingDate').value = getCookie("Tri2StartDate");
document.getElementById('trimester2EndingDate').value = getCookie("Tri2EndDate");
document.getElementById('trimester2StartingDayBlock').value = getCookie("Tri2StartDateBlock");

document.getElementById('trimester3StartingDate').value = getCookie("Tri3StartDate");
document.getElementById('trimester3EndingDate').value = getCookie("Tri3EndDate");
document.getElementById('trimester3StartingDayBlock').value = getCookie("Tri3StartDateBlock");


arrayDaysOff = JSON.parse(getCookie("datesOff")); 


//insertion sort array of dates off by date in ascending order;
for (let i = 1; i < arrayDaysOff.length; i++) { //starts at second item in array and increments up 
    let j = 0;
    while (j < i) { //checks for every element in array before current one
        if (compareDates(convertStringDateToJSDate(arrayDaysOff[i]),convertStringDateToJSDate(arrayDaysOff[j])) < 0) { 
            //if the date we are looking at is less than any date before it 
            arrayDaysOff.splice(j, 0, arrayDaysOff[i]); //add that in to the index of where the later date was found
            arrayDaysOff.splice(i + 1, 1); //delete the date we are looking at from its inital point 
        }
        j++;
    }
}



var select = document.getElementById("selectDateOffToDelete");


for(var i = 0; i < arrayDaysOff.length; i++) {
    var opt = (arrayDaysOff[i]);
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}


// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    window.location = "/";
}

// Function to get the value of a cookie by name
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to replace the value of a cookie
function replaceCookie(cookieName, newValue, expirationDays) {
    // Check if the cookie exists
    if (getCookie(cookieName)) {
        // Set the new value for the cookie
        setCookie(cookieName, newValue, expirationDays);
    } 
}

//Function to turn a date in string format yyyy-mm-dd to JS Date
function convertStringDateToJSDate(dateStr) {
    let year = parseInt(dateStr.substr(0, 4), 10);
    let month = parseInt(dateStr.substr(5, 2), 10) - 1; //-1 Since January is 0
    let day = parseInt(dateStr.substr(8, 2), 10);
    var newDate = new Date(year, month, day);
    return newDate;
}

//Function to turn JS Date into string of format yyyy-mm-dd
function convertJSDateToString(jsDate) {
    var year = jsDate.getFullYear();
    var month = ('0' + (jsDate.getMonth() + 1)).slice(-2); //add one since Janurary is 0 
    var day = ('0' + jsDate.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
}

function getDateInfo(jsDate){
    let year = jsDate.getFullYear();
    let month = jsDate.getMonth() +1;
    let day =  jsDate.getDate();
    return(month  + "/" + day+ "/" + year );
}



function compareDates(jsDate1, jsDate2) {
    return ((jsDate1.getTime() - jsDate2.getTime()) / (1000 * 60 * 60 * 24));
}