var images = ['images/vihaan1.jpg', 'images/vihaan2.jpg', 'images/vihaan3.jpg',
    'images/vihaan4.jpg', 'images/vihaan5.jpg'];

var i = 0;
function startSlideShow() {
    // document.getElementById('photo').src = 'images/vihaan2.jpg';
    //while (i < images.length) {
    //    document.getElementById('photo').src = images[i];
    //    i++;
    //}

    if (i == images.length) {
        i = 0;
    }

    document.getElementById('photo').src = images[i];
    i++;
}

function start() {
    intervalId = setInterval(startSlideShow, 1000);
}

function stopSlideShow() {
    clearInterval(intervalId);
}

function previousImage() {
    document.getElementById('photo').src = images[i];
    i--;
    if (i <= 0) {
        document.getElementById('prevButton').style.display = 'none';
    }
}

function nextImage() {
    // alert(i);
    document.getElementById('photo').src = images[i];
    i++;
    if (i >= images.length) {
        i = images.length - 1;
    }
}