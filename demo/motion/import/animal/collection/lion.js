import {animal} from "../animal";

export class lion extends animal {
    constructor(direction) {
        super();
        this.direction = direction;
        this.spriteID = 0;
        this.name = "lion";
        switch (direction) {
            default:
            case 1:
                this.points = [[4, 4], [6, 5], [7, 7], [6, 9], [4, 10], [2, 9], [1, 7], [2, 5], [4, 4]];
                break;
            case - 1:
                this.points = [[4, 4], [2, 5], [1, 7], [2, 9], [4, 10], [6, 9], [7, 7], [6, 5], [4, 4]];
                break;
        }
    }

}