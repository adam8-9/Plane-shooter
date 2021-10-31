let body = document.querySelector('body')
let player = document.querySelector(".playerPlane")
let test = document.querySelector("section")
let bullet = document.querySelector(".bullet")
let plane1 = document.querySelector('.plane1')
let plane2 = document.querySelector('.plane2')
let plane3 = document.querySelector('.plane3')

/*let plane1PosY = window.scrollY + plane1.getBoundingClientRect().top // Y
let plane2PosY = window.scrollY + plane2.getBoundingClientRect().top // Y
let plane3PosY = window.scrollY + plane3.getBoundingClientRect().top // Y

let plane1PosX = window.scrollX + plane1.getBoundingClientRect().left // Y
let plane2PosX = window.scrollX + plane2.getBoundingClientRect().left // Y
let plane3PosX = window.scrollX + plane3.getBoundingClientRect().left // Y*/
//console.log(plane1PosY, plane1PosX, plane2PosY, plane2PosX, plane3PosY, plane3PosX)
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

let bulletPos
let plane1Pos = plane1.getBoundingClientRect()
let plane2Pos = plane2.getBoundingClientRect()
let plane3Pos = plane3.getBoundingClientRect()
let bulletMove = false
function animateOff() {
    bullet.classList.remove('animate-on')
    bulletMove = false
    //bullet.parentNode.removeChild(bullet)
    //  bullet.parentNode.firstChild
    /* newBullet = document.createElement('div')
     player.append(newBullet)
     setTimeout(newBullet.classList.add('bullet'),
         newBullet.classList.add('animate-on'), 100)*/
    bulletPos = {}
    // player.append(bullet)

}


let posCheck = (() => {
    console.log(bulletPos.x)
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
    /*BulletPosition[x] = window.scrollX + bullet.getBoundingClientRect().left // x
    console.log(bullet.getBoundingClientRect())
    BulletPosition[y] = window.scrollY + bullet.getBoundingClientRect().top // y*/
    bulletPos = bullet.getBoundingClientRect()
    /* while (bulletMove === true) {
         console.log(bulletPos.x)
     }*/
    //posCheck()
    setTimeout(() => {
        while (bulletMove) {
            trackBullet(bulletPos, plane1Pos)
            bulletMove = false
            if (!bulletMove) {
                break
            }
        }
    }, 100)
    setTimeout(animateOff, 1100)
    //player.append(bullet)
    // setTimeout(player.append(bullet), 201)

})






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