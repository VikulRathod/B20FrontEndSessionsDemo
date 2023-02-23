var numbers1 = [];
document.write(numbers1.length + '<br/>'); // 0

numbers1 = [10, 20, 30, 'vishal'];
document.write(numbers1.length + '<br/>'); // 4

//var numbers2 = new Array();
//document.write(numbers2.length + '<br/>');

//numbers2 = new Array(10, 20, 30, 40);
//document.write(numbers2.length + '<br/>'); // 4

// document.write(numbers1[1] + '<br/>'); // 20

document.write(numbers1 + '<br/>');

numbers1.push(50); // adds item at end of the array
document.write(numbers1 + '<br/>');
document.write(numbers1.length + '<br/>');

var r1 = numbers1.pop(); // retrieves item from end of the array
document.write(r1 + '<br/>');
document.write(numbers1.length + '<br/>');

numbers1.unshift(5); // adds item at start of the array
document.write(numbers1 + '<br/>');

r1 = numbers1.shift(); // retrieves item from start of the array
document.write(r1 + '<br/>');

document.write(numbers1 + '<br/>');

numbers1.splice(0, 2);
document.write(numbers1 + '<br/>');

numbers1.splice(0, 0, 15);
document.write(numbers1 + '<br/>');

numbers1.splice(0, 0, 5, 6, 7);
document.write(numbers1 + '<br/>');

// 5 6 7 15 30 vishal

numbers1.splice(2, 3, 100, 200, 300, 400);
document.write(numbers1 + '<br/>');

// 5 6 100 200 300 400 vishal

numbers1.splice(4, 1, 30);
document.write(numbers1 + '<br/>');

var names = ['vishal', 'dipak', 'shital', 'aniket'];
document.write(names + '<br/>');

//names.reverse();
//document.write(names + '<br/>');

names.sort();
document.write(names + '<br/>');

var numbers = [10, 4, 45, 17, 12];
document.write(numbers + '<br/>');

numbers.sort(compareLogic);
document.write(numbers + '<br/>');

function compareLogic(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

var result = numbers.filter(even);
document.write(result + '<br/>');

function even(val, index, arr) {
    if (val % 2 == 0)
        return true;
    else
        return false;
}


numbers = [10, 10, 4, 45, 17, 12, 10, 4, 45];
document.write(numbers + '<br/>');
result = numbers.filter(uniqueLogic);
document.write(result + '<br/>');

function uniqueLogic(val, index, arr) {
    var valueIndex = arr.indexOf(val);
    if (valueIndex == index) {
        return true;
    }
    else {
        return false;
    }
}

//var i = 1;
//while (i <= 0) {
//    document.write(i + '<br/>');
//    i++;
//}

//var i = 1;
//do {
//    document.write(i + '<br/>');
//    i++;
//} while (i <= 0);

//for (var i = 1; i <= 10; i++) {
//    if (i == 5) {
//        // break;
//        continue;
//    }
//    document.write(i + '<br/>');
//}

numbers1 = [10, 20, 30, 'vishal'];
//for (var i = 0; i < numbers1.length; i++) {
//    document.write(numbers1[i] + '<br/>');
//}

for (var i in numbers1) {
    document.write(i + '<br/>');
}

for (var i of numbers1) {
    document.write(i + '<br/>');
}