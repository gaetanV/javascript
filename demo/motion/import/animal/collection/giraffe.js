import {animal} from "../animal";

export function giraffe(direction) {
    animal.call(this);
    this.direction = direction;
    this.spriteID = 1;
    this.name = "giraffe";
    switch (direction) {
        default:
        case 1:
            this.points = [[7, 1], [7, 12], [6, 10], [4, 9], [2, 10], [1, 12]];
            break;
        case - 1:
            this.points = [[1, 1], [1, 12], [2, 10], [4, 9], [6, 10], [7, 12]];
            break;
    }
}
giraffe.prototype = Object.create(animal.prototype);