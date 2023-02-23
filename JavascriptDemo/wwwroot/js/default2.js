// alert('Hello');
// confirm('are you sure?');

var n1 = prompt('Please enter a number');
document.write('Entered number is: ' + n1 + '<br/>');

//if (n1 == 10) {
//    document.write('TEN' + '<br/>');
//}
//else {
//    document.write('NOT TEN' + '<br/>');
//}

//var result = (n1 == 10) ? 'TEN' : 'NOT TEN';
//document.write(result + '<br/>');
//// alert(result + '<br/>');

//if (n1 == 10) {
//    document.write('TEN' + '<br/>');
//} else if (n1 == 20) {
//    document.write('TWENTY' + '<br/>');
//} else if (n1 == 30) {
//    document.write('THIRTY' + '<br/>');
//}
//else {
//    document.write('NOT 10 or 20 or 30' + '<br/>');
//}

switch (n1) {
    case '10':
        document.write('TEN' + '<br/>');
        break;
    case '20':
        document.write('TWENTY' + '<br/>');
        break;
    case '30':
        document.write('THIRTY' + '<br/>');
        break;
    default:
        document.write('NOT 10 20 or 30' + '<br/>');
        break;
}

var i1 = 10, i2 = 10;
result = (i1 == i2) ? 'EQUAL' : 'NOT EQUAL'
document.write(result + '<br/>');

result = (i1 === i2) ? 'EQUAL' : 'NOT EQUAL'
document.write(result + '<br/>');

var result1 = i1 * i2;
document.write(result1 + '<br/>'); // 100

i1 = 2, i2 = 3;
// result1 = i1 ** i2;
result1 = Math.pow(i1, i2);
document.write(result1 + '<br/>');