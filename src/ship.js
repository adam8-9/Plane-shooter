import shipImage from '../images/ship.png'

export class Ship {
    constructor() {
        this.el = document.createElement('img');
        this.el.src = shipImage;
        document.body.appendChild(this.el);

        this.el.className = 'ship';

        this.SPEED = 2
        this.SHIP_IMAGE_WIDTH = 50

        this.setX(window.innerWidth / 2)
        this.setY(window.innerHeight - 80)

    }

    setX(x) {
        this.x = x
        this.el.style.left = `${this.x}px`;
    }

    setY(y) {
        this.y = y
        this.el.style.top = `${this.y}px`;
    }

    moveRight() {
        this.setX(this.x + this.SPEED)
    }
    moveLeft() {
        this.setX(this.x - this.SPEED)
    }

}