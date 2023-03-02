//document.getElementById('btn').onclick = btnClick;
//document.getElementById('btn').onclick = btnClick1; /// overriding old function
//// document.getElementById('btn').onclick += btnClick1; // not working

btn.addEventListener('click', btnClick);
btn.addEventListener('click', btnClick1);

btn.removeEventListener('click', btnClick);

function btnClick() {
    alert('button clicked');
}

function btnClick1() {
    alert('button clicked again');
}