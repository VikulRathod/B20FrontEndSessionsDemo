////var str = 'sky is blue.water is blue. Ballon is BLUE';
////document.write(str + '<br/>');

////// var result = str.replace('blue', 'green');
////// var result = str.replace('\bblue\b', 'green');

//var str = 'my age is 32.my mobile number is 8956890522';
//document.write(str + '<br/>');

//// var pattern = /blue/gi;
//var pattern = /\d+/g;

////var result = str.replace(pattern, 'green');
////document.write(result + '<br/>');

//result = str.match(pattern);
//document.write(result + '<br/>');

////result = str.split(pattern);
////document.write(result + '<br/>');

////result = str.search(pattern);
////document.write(result + '<br/>');

//pattern = /\d\d/g;
//result = str.match(pattern);
//document.write(result + '<br/>');

//pattern = /\d{2}/g;
//result = str.match(pattern);
//document.write(result + '<br/>');

//var num = '11ABC23';
//var chars = /[A-Z]/g;
//var result1 = num.search(chars);
//document.write(result1 + '<br/>');
//result1 = num.match(chars);
//document.write(result1 + '<br/>');

//document.getElementById('txtName').focus();

function txtFocus() {
    document.getElementById('txtName').value = 'Textbox is ready';
}

function txtBlur() {
    document.getElementById('txtName').value = 'You Left';
}

function txtKeyUp() {
    // debugger;
    var value = document.getElementById('txtName').value;
    if (value == undefined || value == 'undefined' ||
        value == '') {
        document.getElementById('lblMessage').innerText = 'Please enter some value';
    } else {
        document.getElementById('lblMessage').innerText = value;
    }
}

function processUserInput() {
    // var pattern = /[aeiou]/g;
    // pattern = /[a-zA-Z]/g;
    // pattern = /\w/g;
    // pattern = /\W/g;
    // pattern = /[0-9]+/g;
    // pattern = /\d+/g;
    var pattern = /^\.$/g;

    var input = document.getElementById('userInput').value;

    //var result = input.match(pattern);
    //var sum = 0;
    //for (var i = 0; i < result.length; i++) {
    //    sum += parseInt(result[i]);
    //}

    //document.getElementById('lblOutput').innerText = result;
    //document.getElementById('lblOutput').innerText += ' = ' + sum;

    var result = input.replace(pattern, '***');
    document.getElementById('lblOutput').innerText = result;
}

function validateMobile() {
    var input = document.getElementById('mobile').value;

    var mobilePattern = new RegExp('\^\d{10}$');

    if (!mobilePattern.test(input)) {
        document.getElementById('mobile').style.border = '1px solid red';
    }
    else {
        document.getElementById('mobile').style.border = '1px solid gray';
    }

}

function validatePassword() {
    var password = document.getElementById('password');
    var input = password.value;

    // var emailPattern = new RegExp('\^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    //var emailPattern = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');

    // var emailPattern = new RegExp('\^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z+]{2,}$');
    // var emailPattern = new RegExp('\^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*(\.[a-zA-Z]{2,})$');

    // var pwdPattern = new RegExp('\^[a-zA-Z]+[0-9]+[@#%$&]+$');
    var pwdPattern = new RegExp('\^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$');

    if (!pwdPattern.test(input)) {
        password.style.border = '2px solid red';
    }
    else {
        password.style.border = '2px solid green';
    }
}

function validateEmail() {
    var email = document.getElementById('email');
    var input = email.value;

    // var emailPattern = new RegExp('\^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    //var emailPattern = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');

    // var emailPattern = new RegExp('\^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z+]{2,}$');
    var emailPattern = new RegExp('\^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]*(\.[a-zA-Z]{2,})$');


    if (!emailPattern.test(input)) {
        email.style.border = '1px solid red';
    }
    else {
        email.style.border = '1px solid gray';
    }

}