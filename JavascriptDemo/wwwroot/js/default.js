// document.getElementById('heading2').style.color = 'green';

/*function changeColor() {
    document.getElementById('heading1').style.color = 'red';
}
*/

// confirm('Are you sure want to leave?');

var v1 = 10;
document.getElementById('divResult').innerHTML = v1 + '<br/>';
v1 = 10.456;
document.getElementById('divResult').innerHTML += v1 + '<br/>';
document.getElementById('divResult').innerHTML += typeof (v1) + '<br/>';

document.getElementById('divResult').innerHTML += (v1 + v1) + '<br/>';

document.getElementById('divResult').innerHTML += (v1.toString() + v1.toString()) + '<br/>';

v1 = 10.456785;
document.getElementById('divResult').innerHTML += v1.toFixed(2) + '<br/>';

// string to number
var v2 = '10';
v1 = parseInt(v2);
document.getElementById('divResult').innerHTML += v1 + '<br/>';

v2 = '20.56';
v1 = parseFloat(v2);
document.getElementById('divResult').innerHTML += v1 + '<br/>';

v2 = '20.56';
v1 = new Number(v2);
document.getElementById('divResult').innerHTML += v1 + '<br/>';

// NaN = Not a Number

v2 = '';
v1 = parseInt(v2); // NaN
document.getElementById('divResult').innerHTML += v1 + '<br/>';

v2 = null;
v1 = parseInt(v2); // NaN
document.getElementById('divResult').innerHTML += v1 + '<br/>';

v2 = 'XYZ';
v1 = parseInt(v2); // NaN
document.getElementById('divResult').innerHTML += v1 + '<br/>';

var v3 = isNaN(10); // false
document.getElementById('divResult').innerHTML += v3 + '<br/>';

v3 = isNaN('abc'); // true
document.getElementById('divResult').innerHTML += v3 + '<br/>';

var v4;
document.getElementById('divResult').innerHTML += v4 + '<br/>';

// boolean type
var b1 = true;
document.getElementById('divResult').innerHTML += b1 + '<br/>';

// boolean => number => true = 1, false = 0
var n1 = 1, n2 = 2;
document.getElementById('divResult').innerHTML += (b1 + n1 + n2) + '<br/>'; // 4

b1 = false;
document.getElementById('divResult').innerHTML += (b1 + n1 + n2) + '<br/>'; // 3

var s1 = "A", s2 = "B";
document.getElementById('divResult').innerHTML += (b1 + s1 + s2) + '<br/>';

document.getElementById('divResult').innerHTML = '';

var name = 'Vishal';
document.getElementById('divResult').innerHTML += name + '<br/>';

name = "Mahesh";
document.getElementById('divResult').innerHTML += name + '<br/>';

name = '"Vishal"';
document.getElementById('divResult').innerHTML += name + '<br/>';

name = "'Mahesh'";
document.getElementById('divResult').innerHTML += name + '<br/>';

name = "\"Mahesh\"";
document.getElementById('divResult').innerHTML += name + '<br/>';

name = "Mahesh\nJadhav";
// document.getElementById('divResult').innerHTML += name + '<br/>';
document.getElementById('address').value = name;

name = 'Vishal';
document.getElementById('divResult').innerHTML += name.toUpperCase() + '<br/>';

name = 'Vishal';
document.getElementById('divResult').innerHTML += name.toLowerCase() + '<br/>';

name = 'Vishal';
document.getElementById('divResult').innerHTML += name.length + '<br/>';

name = 'Vishal';
document.getElementById('divResult').innerHTML += name + '<br/>';

var url = 'www.google.com';
var r1 = url.replace('com', 'co.in');
document.getElementById('divResult').innerHTML += r1 + '<br/>';

r1 = url.indexOf('.');
document.getElementById('divResult').innerHTML += r1 + '<br/>';

r1 = url.lastIndexOf('.');
document.getElementById('divResult').innerHTML += r1 + '<br/>';

var sentence = 'How are you';
var words = sentence.split(' ');

document.getElementById('divResult').innerHTML += words + '<br/>';

//for (var i = 0; i < words.length; i++) {
//    document.getElementById('divResult').innerHTML += words[i] + '<br/>';
//}

var student = { name: 'Vishal', gender: 'Male', city: 'Pune' };
document.getElementById('divResult').innerHTML += student.name + '<br/>';
document.getElementById('divResult').innerHTML += student.gender + '<br/>';
document.getElementById('divResult').innerHTML += student.city + '<br/>';
