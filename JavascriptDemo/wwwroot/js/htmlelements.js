function getValues() {
    var v1 = document.getElementById('txt1').value;
    console.log('textbox value : ' + v1);

    // v1 = document.getElementById('p1').innerText;
    v1 = document.getElementById('p1').innerHTML;
    console.log('paragraph text : ' + v1);

    v1 = document.getElementById('div1').innerHTML;
    console.log('div content : ' + v1);
}

function setValues() {
    document.getElementById('txt2').value = 'VHAASH';
    document.getElementById('p2').innerText = 'This is second paragraph';
    document.getElementById('div2').innerHTML =
        'Div 2 Content <br/>' +
        '<a href="http://www.google.com">Visit Google</a>' +
        '<span>Span Content</span>';

    var txt = document.getElementById('txt2');
    txt.style.backgroundColor = 'yellow';
    txt.style.color = 'red';


    document.getElementById('a1').setAttribute('href', 'http://www.facebook.com');
    document.getElementById('a1').setAttribute('target', '_blank');

}

function readForm() {
    var city = document.getElementById('city').value;
    console.log('selected city : ' + city);

    var rbMale = document.getElementById('rbMale');
    var rbFemale = document.getElementById('rbFemale');

    if (rbMale.checked) {
        console.log('selected gender : ' + rbMale.value);
    } else if (rbFemale.checked) {
        console.log('selected gender : ' + rbFemale.value);
    } else {
        console.log('gender not selected');
    }


}

var textareas = document.getElementsByTagName('textarea');
textareas[1].style.backgroundColor = 'red';