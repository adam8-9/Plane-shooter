let body = document.querySelector('body')
let player = document.querySelector(".playerPlane")
let test = document.querySelector("section")
let bullet = document.querySelector(".bullet")
let plane1 = document.querySelector('.plane1')
let plane2 = document.querySelector('.plane2')
let plane3 = document.querySelector('.plane3')

console.log(plane1.getBoundingClientRect())

let x;
let y;
window.addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY
    player.style.left = x + "px"
    player.style.top = y + "px"
    //console.log(y, x)
})

let bulletPos = bullet.getBoundingClientRect()
let plane1Pos = plane1.getBoundingClientRect()
let plane2Pos = plane2.getBoundingClientRect()
let plane3Pos = plane3.getBoundingClientRect()
let bulletMove = false

function animateOff() {
    bullet.classList.remove('animate-on')
    bulletMove = false
    bulletPos = {}
    // player.append(bullet)

}


let posCheck = (() => {
    // doconsole.log(bulletPos.x)
    setTimeout(posCheck(), 1000)
})
let trackBullet = ((bullets, plane) => {

    if (bullets.x < plane.x + plane.width &&
        bullets.x + bullets.width > plane.x &&
        bullets.y < plane.y + plane.height &&
        bullets.y + bullets.height > plane.y
    ) {
        console.log('hit')
        bullet.parentNode.removeChild(bullet)
        //plane.remove()
    } else {
        console.log('no hit')
    }

})

let mouse = false
player.addEventListener("click", (e) => {
    bullet.classList.add('animate-on')
    bulletMove = true
    /* while (bulletMove === true) {
         console.log(bulletPos.x)
     }*/
    //posCheck()
    /* setTimeout(() => {
         while (bulletMove) {
             trackBullet(bulletPos, plane1Pos)
             bulletMove = false
             if (!bulletMove) {
                 break
             }
         }
     }, 100)*/
    // setTimeout(animateOff, 1100)
    //player.append(bullet)
    // setTimeout(player.append(bullet), 201)

})

while (bullet !== undefined) {
    trackBullet(bulletPos, plane1Pos)
    console.log('runs')
}






//make a function
//make it return bulletPosition until algorithm is met 











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