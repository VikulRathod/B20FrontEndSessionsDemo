function visitGoogle() {
    // window.open(); // opens a new tab
    // window.open('http://www.google.com');
    // window.open('http://www.google.com', '_self');
    // window.open('http://www.google.com', '_blank');
    //window.open('http://www.google.com', '_blank',
    //    'width=400,height=400,left=100,top=100,resizable=0');

    //myWindow = window.open('http://www.google.com', 'myWindow',
    //    'width=400,height=400,left=100,top=100,resizable=0', true);

    myWindow = window.open('', 'myWindow'); // opens a new tab
}

function closeWindow() {
    // debugger;
    // window.close(myWindow);
    myWindow.close();
}