//var today = new Date();
//document.write('today: ' + today + '<br/>');

//document.write('only date: ' + today.toDateString() + '<br/>');
//document.write('only date: ' + today.toLocaleDateString() + '<br/>');

//document.write('only time: ' + today.toTimeString() + '<br/>');
//document.write('only time: ' + today.toLocaleTimeString() + '<br/>');

//document.write('only year: ' + today.getFullYear() + '<br/>');
//document.write('only month: ' + (parseInt(today.getMonth()) + 1) + '<br/>');

//var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'
//    , 'Nov', 'Dec'];
//var m = today.getMonth();
//document.write('only month name: ' + months[m] + '<br/>');

//document.write('only date: ' + today.getDate() + '<br/>');

//document.write('only day: ' + today.getDay() + '<br/>');

//var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//var d = today.getDay();
//document.write('only day name: ' + days[d] + '<br/>');

//var dob = '2/27/2023';
//var dateOfBirth = new Date(dob);
//document.write('only year from dob: ' + dateOfBirth.getFullYear() + '<br/>');

//var todayDate = today.toLocaleDateString();
//var dobDate = dateOfBirth.toLocaleDateString();

////var todayDate = today.getDate();
////var dobDate = dateOfBirth.getDate();

////if (todayDate == dobDate) {
////    document.write('today and dob dates are same <br/>');
////} else {
////    document.write('today and dob dates are not same <br/>');
////}

//document.write('todayDate : ' + todayDate + '<br/>')
//document.write('dobDate : ' + dobDate + '<br/>')

////if (todayDate >= dobDate) {
////    document.write('todays date greater than dobDate <br/>');
////} else {
////    document.write('todays date is not greater than dobDate <br/>');
////}

//var result = returnGreaterDate(todayDate, dobDate);
//if (result != undefined) {
//    document.write(result.toLocaleDateString() + ' is a greater date');
//} else {
//    document.write('both dates are same');
//}


//function returnGreaterDate(firstDate, secondDate) {
//    var first = new Date(firstDate);
//    var second = new Date(secondDate);

//    if (first.getFullYear() > second.getFullYear()) {
//        return first;
//    } else if (first.getFullYear() < second.getFullYear()) {
//        return second;
//    } else if (first.getFullYear() == second.getFullYear()) {
//        if (first.getMonth() > second.getMonth()) {
//            return first;
//        } else if (first.getMonth() < second.getMonth()) {
//            return second;
//        } else if (first.getMonth() == second.getMonth()) {
//            if (first.getDate() > second.getDate()) {
//                return first;
//            } else if (first.getDate() < second.getDate()) {
//                return second;
//            } else {
//                // document.write('both dates are same');
//                return undefined;
//            }
//        }
//    }
//}

// document.getElementById('divTime').innerHTML = new Date();

function setDateTime() {
    var today = new Date();
    var date = today.toLocaleDateString();
    var time = today.toLocaleTimeString();

    document.getElementById('divTime').innerHTML = "Current Date Time : ";
    document.getElementById('divTime').innerHTML += date + ' ' + time;
}

setDateTime();

// intervalId = setInterval(setDateTime, 1000);

function stopClock() {
    clearInterval(intervalId);
}

function startClock() {
    intervalId = setInterval(setDateTime, 1000);
}

var intervalId;
function toggleClock() {
    debugger;
    if (intervalId == undefined) {
        intervalId = setInterval(setDateTime, 1000);
    } else {
        clearInterval(intervalId);
    }
}

function sessionAction() {
    alert('Session needs to be stopped now.');
}

// sessionAction();
timoutIntervalId = setTimeout(sessionAction, 5000);

function clearAlertTimeout() {
    clearTimeout(timoutIntervalId);
}