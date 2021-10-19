let body = document.querySelector('body')
let player = document.querySelector(".playerPlane")
let test = document.querySelector("section")

let x;
let y;

window.addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY
    player.style.left = x + "px"
    player.style.top = y + "px"


})

function create() {
    console.log('held')
    let bullet = document.createElement('div')
    bullet.classList.add('bullet')
    // bullet.style.backgroundColor = "white"
    bullet.style.left = (x - 5) + "px"
    bullet.style.top = (y - 60) + "px"
    body.appendChild(bullet)
    bullet.style.transition = "transform 1s ease"
    bullet.style.transform = "translateY(-1000%)"
    setTimeout('create()', 1)
}

let mouse = false
player.addEventListener("mousedown", (e) => {
    mouse = true
    if (e.type === "mousedown") {
        setTimeout('create()', 1)
    } else {

    }

})

player.addEventListener("mouseup", (e) => {
    mouse = false;
})
/*mouse = false;
function mousedown() {
    mouse = true;
    callEvent();
}

function callEvent() {
    if (mouse) {
        // do whatever you want
        // it will continue executing until mouse is not released


        setTimeout("callEvent()", 1);
    }*/