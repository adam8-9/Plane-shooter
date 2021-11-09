import { Entity } from "./entity";

export class Bullet extends Entity {
    constructor({ x, y }) {
        super({ className: 'bullet' })
        this.SPEED = 2


        this.setX(x)
        this.setY(y)

    }



}