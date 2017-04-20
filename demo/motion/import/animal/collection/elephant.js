import {animal} from "../animal";

export function elephant(direction) {
    animal.call(this);
    this.direction = direction;
    this.spriteID = 4;
    this.name = "elephant";
    switch (direction) {
        default:
        case 1:
            this.points = [[1, 12], [1, 4], [2, 2], [4, 1], [6, 2], [7, 4], [6, 6], [4, 7], [2, 6], [1, 4]];
            break;
        case - 1:
            this.points = [[7, 12], [7, 4], [6, 2], [4, 1], [2, 2], [1, 4], [2, 6], [4, 7], [6, 6], [7, 4]];
            break;
    }
}

elephant.prototype = Object.create(animal.prototype);