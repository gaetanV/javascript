import {animal} from "../animal";

export class monkey extends animal {
    constructor(direction) {
        super();
        this.direction = direction;
        this.spriteID = 2;
        this.name = "monkey";
        switch (direction) {
            default:
            case 1:
                this.points = [[1, 12], [2, 8], [3, 3], [5, 3], [6, 8], [7, 12]];
                break;
            case - 1:
                this.points = [[7, 12], [6, 8], [5, 3], [3, 3], [2, 8], [1, 12]];
                break;
        }
    }
}