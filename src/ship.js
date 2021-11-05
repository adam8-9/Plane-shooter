import shipImage from './images/ship.png'

export class Ship {
    constructor() {
        this.el = document.createElement('img')
        this.el.src = shipImage
        document.body.appendChild(this.el)
    }
}