import shipImage from '../images/ship.png'
import { Entity } from './entity';

export class Ship extends Entity {
    constructor() {
        super({ tag: 'img' });
        this.el.src = shipImage;
        document.body.appendChild(this.el);

        this.SPEED = 2
        this.SHIP_IMAGE_WIDTH = 50

        this.setX(window.innerWidth / 2)
        this.setY(window.innerHeight - 80)

    }


    moveRight() {
        this.setX(this.x + this.SPEED)
    }
    moveLeft() {
        this.setX(this.x - this.SPEED)
    }

}