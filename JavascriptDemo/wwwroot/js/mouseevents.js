function btnMouseOver() {
    // document.getElementById('btn').style.display = 'none';
    console.log('mouse over event');
}

function btnMouseOut() {
    // document.getElementById('btn').style.display = 'block';
    console.log('mouse out event');
}

function btnMouseMove() {
    // document.getElementById('btn').style.display = 'block';
    console.log('mouse move event');
}

function btnMouseDown() {
    document.getElementById('btn').style.backgroundColor = 'red';
    console.log('mouse down event');
}

function btnMouseUp() {
    document.getElementById('btn').style.backgroundColor = 'green';
    console.log('mouse up event');
}

function btnClick() {
    document.getElementById('btn').style.backgroundColor = 'yellow';
    console.log('mouse click event');
}

function btnDoubleClick() {
    document.getElementById('btn').style.backgroundColor = 'blue';
    console.log('mouse double click event');
}

function commonFunctionForAllEvents(event) {
    console.log('event type : ' + event.type);
    console.log('tag name : ' + event.target.tagName);
    console.log('tag type : ' + event.target.type);
}

function identityButton(event) {
    // event = event | window.event;    
    console.log('button : ' + event.which);
}

document.addEventListener('contextmenu', disableRightClick)

function disableRightClick(event) {
    event.preventDefault();
    return false;
}