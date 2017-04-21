import {animal} from "../animal";

export class snake extends  animal {
    constructor(direction) {
        super();
        this.direction = direction;
        this.spriteID = 3;
        this.name = "snake";
        switch (direction) {
            default:
            case 1:
                this.points = [[7, 4], [6, 2], [4, 1], [2, 2], [1, 4], [2, 6], [4, 7], [6, 8], [7, 10], [6, 12], [4, 13], [2, 12], [1, 10]];
                break;
            case - 1:
                this.points = [[1, 4], [2, 2], [4, 1], [6, 2], [7, 4], [6, 6], [4, 7], [2, 8], [1, 10], [2, 12], [4, 13], [6, 12], [7, 10]];
                break;
        }
    }

}