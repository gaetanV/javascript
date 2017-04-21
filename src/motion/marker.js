export class marker {
    
    constructor(v, id) {

        this.id = id;
        this.vector = v;
        this.x = this.vector.p1.x;
        this.y = this.vector.p1.y;
    }
    move(p1) {
        if (!this.vector.pointBelong(p1))
            return false;
        this.x = p1.x;
        this.y = p1.y;
        return true;
    }
    
}


