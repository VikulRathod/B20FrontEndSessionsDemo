var s1 = 'A', s2 = 'B';
// var s3 = s1 + s2;
var s3 = s1.concat(' ', s2);
console.log(s3);

var email = 'vishal1989@gmail.com';
console.log(email);

var result1 = email.substr(6, 10); // second parameter is count parameter
console.log('substr : ' + result1);

// result1 = email.substring(6, 10); // second parameter is end index
result1 = email.substring(10, 6);
console.log('substring : ' + result1);

// result1 = email.slice(6, 10); // second parameter is end index
result1 = email.slice(2, -2);
console.log('slice : ' + result1);


email = 'vishal@gmail.com';
var index = email.indexOf('@');

var username = email.substring(0, index);
console.log('username : ' + username);

var domain = email.substring(index + 1, email.length);
console.log('domain : ' + domain);

function splitEmail() {
    var email = document.getElementById('email').value;
    var index = email.indexOf('@');
    var username = email.substring(0, index);
    var domain = email.substring(index + 1, email.length);

    document.getElementById('username').value = username;
    document.getElementById('domain').value = domain;
}