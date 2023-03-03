//var str = 'sky is blue.water is blue. Ballon is BLUE';
//document.write(str + '<br/>');

//// var result = str.replace('blue', 'green');
//// var result = str.replace('\bblue\b', 'green');

var str = 'my age is 32.my mobile number is 8956890522';
document.write(str + '<br/>');

// var pattern = /blue/gi;
var pattern = /\d+/g;

//var result = str.replace(pattern, 'green');
//document.write(result + '<br/>');

result = str.match(pattern);
document.write(result + '<br/>');

//result = str.split(pattern);
//document.write(result + '<br/>');

//result = str.search(pattern);
//document.write(result + '<br/>');

pattern = /\d\d/g;
result = str.match(pattern);
document.write(result + '<br/>');

pattern = /\d{2}/g;
result = str.match(pattern);
document.write(result + '<br/>');

var num = '11ABC23';
var chars = /[A-Z]/g;
var result1 = num.search(chars);
document.write(result1 + '<br/>');
result1 = num.match(chars);
document.write(result1 + '<br/>');

document.getElementById('txtName').focus();
