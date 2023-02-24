// alert('funcitons.js loaded');

//// function declaration
//function add() {
//    document.write('add() function called <br/>');
//}

//// function call
//// add();

//var result = add();
//document.write(result + '<br/>'); // undefined

//function add() {
//    return 'add() function result';
//}

//var result = add();
//document.write(result + '<br/>'); // 'add() function result'

//function add(a, b) {
//    var c = a + b;
//    return c;
//}

//var result = add();
//document.write(result + '<br/>'); // NaN

//result = add(10);
//document.write(result + '<br/>'); // NaN

//result = add(10, 10);
//document.write(result + '<br/>'); // 20

//result = add('A', 'B');
//document.write(result + '<br/>'); // AB

//result = add(10, 20, 30, 40);
//document.write(result + '<br/>'); // 30

//result = add(10, 20, 30, 40, 50);
//document.write(result + '<br/>'); // 30

//function add(a, b) {

//    document.write(arguments.length + '<br/>');
//    for (var args of arguments) {
//        document.write(args + ' ');
//    }
//    document.write('<br/>');
//    var c = a + b;
//    return c;
//}

//var add = function () {
//    document.write('add() function called <br/>');
//}

//add();

//var add = function addition() {
//    document.write('add() function called <br/>');
//}

//// add();
//addition();


//var factorial = function fact(num) {

//    if (num == 1)
//        return 1;

//    return num * fact(num - 1);
//}

//var result = factorial(10);
//document.write(result + '<br/>');

//var result = factorial;
//document.write(result + '<br/>');

//var factorial = (function fact(num) {

//    if (num == 1)
//        return 1;

//    return num * fact(num - 1);
//})(5);

//var result = factorial;
//document.write(result + '<br/>');  // 120

//(
//    function () {
//        document.write('Self Executed function <br/>');
//    }
//)();

//function printa() {

//    function printb() {
//        document.write('printb() executed');
//    }

//    printb();
//}

//printa();

//function printa(a) {
//    var v1 = 'local outer function variable';

//    function printb() {
//        document.write('printb() executed <br/>');
//        document.write('outer function parameter : ' + a + '<br/>');
//        document.write('outer function variable : ' + v1 + '<br/>');
//    }

//    printb();
//}

//printa(10);

//function printa(a, b) {

//    function printb() {
//        return a + b;
//    }

//    return printb;
//}

//var result = printa(10, 20)();
//document.write(result + '<br/>');

//var result = add(10, 20, 30); // 60
//document.write(result + '<br/>');

//function add(a, b, c) {
//    return a + b + c;
//}

//var result = add(10)(20)(30); // 60
//document.write(result + '<br/>');

//function add(a) {
//    function adda(b) {
//        function addb(c) {
//            return a + b + c;
//        }
//        return addb;
//    }
//    return adda;
//}

//var a = 10;  // global variable

//function f1() {
//    var b = 20; // local variable
//    c = 30; // as a global variable
//    document.write('global variale f1(): ' + a + '<br/>');
//    document.write('f1() local variable: ' + b + '<br/>'); // 20
//    document.write('f1() global variable: ' + c + '<br/>'); // 30
//}

//function f2() {
//    document.write('global variale f2(): ' + a + '<br/>');
//    // document.write('f1() local variable: ' + b + '<br/>'); // undefined
//    document.write('f1() global variable: ' + c + '<br/>');
//}

//f1();
//f2();

f1();

function f1() {    
    document.write(a + '<br/>');
    var a = 10;
}

