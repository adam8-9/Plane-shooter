let body = document.querySelector('body')
let player = document.querySelector(".playerPlane")
let test = document.querySelector("section")
let bullet = document.querySelector(".bullet")
let plane1 = document.querySelector('.plane1')
let plane2 = document.querySelector('.plane2')
let plane3 = document.querySelector('.plane3')
//console.log(plane1)
let plane1PosY = window.scrollY + plane1.getBoundingClientRect().top // Y
let plane2PosY = window.scrollY + plane2.getBoundingClientRect().top // Y
let plane3PosY = window.scrollY + plane3.getBoundingClientRect().top // Y

let plane1PosX = window.scrollX + plane1.getBoundingClientRect().left // Y
let plane2PosX = window.scrollX + plane2.getBoundingClientRect().left // Y
let plane3PosX = window.scrollX + plane3.getBoundingClientRect().left // Y
console.log(plane1PosY, plane1PosX, plane2PosY, plane2PosX, plane3PosY, plane3PosX)

/*let planePos = (plane) => {
    planeX = plane.s
    planeY = plane.clientY
    console.log(planeX, plane)
}

planePos(plane1)*/


let x;
let y;
window.addEventListener("click", (e) => {
    x = e.clientX
    y = e.clientY
    // player.style.left = x + "px"
    // player.style.top = y + "px"
    //console.log(y, x)


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

let BulletPosition = {}
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
    BulletPosition[x] = window.scrollX + bullet.getBoundingClientRect().left // x
    BulletPosition[y] = window.scrollY + bullet.getBoundingClientRect().top // y
    console.log(BulletPosition)
    setTimeout(animateOff, 1100)
    //player.append(bullet)
    // setTimeout(player.append(bullet), 201)




})

player.addEventListener("mouseup", (e) => {
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