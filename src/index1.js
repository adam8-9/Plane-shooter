import { Ship } from './ship'

const keys = {
    a: false,
    d: false,
    ['']: false
}

document.addEventListener('keydown', (e) => {
    keys[e.key] = true
})

document.addEventListener('keyup', (e) => {
    keys[e.key] = false
})
const ship = new Ship()

const update = () => {
    if (keys['d'] && ship.x < window.innerWidth - ship.SHIP_IMAGE_WIDTH) {
        ship.moveRight()
    } else if (keys['a'] && ship.x > 0) {
        ship.moveLeft()
    }
}

setInterval(update, 20)