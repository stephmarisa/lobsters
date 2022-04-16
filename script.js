var eyeBall = document.querySelector('#eyeBall');

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    eyeBall.style.transition = "0s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
}

document.onmouseout = (event) => {
    eyeBall.style.transition = "0.7s";
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
}

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	orientation: 'right'
});