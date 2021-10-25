let body = document.querySelector('body')
let player = document.querySelector(".playerPlane")
let test = document.querySelector("section")
let bullet = document.querySelector(".bullet")

let x;
let y;

window.addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY
    player.style.left = x + "px"
    player.style.top = y + "px"


})

/*function create() {
    console.log('held')
    let bullet = document.createElement('div')
    bullet.classList.add('bullet')
    // bullet.style.backgroundColor = "white"
    body.appendChild(bullet)
    bullet.style.left = (x - 5) + "px"
    bullet.style.top = (y - 55) + "px"
    bullet.style.transform = "translateY(-1000%)"
    //setTimeout('create()', 5)
}*/
let newBullet;
function animateOff() {
    bullet.classList.remove('animate-on')
    // bullet.parentNode.removeChild(bullet)
    //  bullet.parentNode.firstChild
    /* newBullet = document.createElement('div')
     player.append(newBullet)
     setTimeout(newBullet.classList.add('bullet'),
         newBullet.classList.add('animate-on'), 100)*/
    player.append(bullet)

}
let mouse = false
player.addEventListener("click", (e) => {

    bullet.classList.add('animate-on')
    setTimeout(animateOff, 400)
    //player.append(bullet)
    // setTimeout(player.append(bullet), 201)




})

player.addEventListener("mouseup", (e) => {
    console.log('up')
    mouse = false;
    //bullet.classList.add('animate-off')

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