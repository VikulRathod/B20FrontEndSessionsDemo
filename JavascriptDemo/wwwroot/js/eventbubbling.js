//div1.addEventListener('click', divClick);
//span1.addEventListener('click', spanClick);
//btn1.addEventListener('click', btnClick);

// event capturing
div1.addEventListener('click', divClick, true);
span1.addEventListener('click', spanClick, true);
btn1.addEventListener('click', btnClick, true);


function divClick(e) {
    e.stopPropagation();
    alert('div clicked');
}

function spanClick(e) {
    e.stopPropagation();
    alert('span clicked');
}

function btnClick(e) {
    e.stopPropagation();
    alert('button clicked');
}