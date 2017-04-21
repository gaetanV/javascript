import {elephant} from "./collection/elephant";
import {giraffe} from "./collection/giraffe";
import {lion} from "./collection/lion";
import {monkey} from "./collection/monkey";
import {snake} from "./collection/snake";

import {point} from "point";

export class animalCollection {
    constructor() {
        //animals Positions
        this.dom = document.createElement('section');
        this.dom.id = "animalCollection";
        document.body.appendChild(this.dom);
        this.list = new Array;
        this.animalWidth = 250;
        this.position = [[750, -600], [750, 85], [1450, 30], [2300, 0]];  /// 780 * 1920 
        this.jump = 250;
        this.maxAnimal = this.position.length;
        for (var i = 0; i < this.maxAnimal; i++) {
            this.addAnimal();
        }
        ;
        this.ratio = 1;
        var ratio;
    }

    setRatio(newValue) {
        this.ratio = newValue;
        for (var i = 0; i < this.list.length; i++) {
            var animal = this.list[i];

            animal.setWidth(this.animalWidth * newValue);

            var p = new point(this.position[i][0], this.position[i][1]);
            p.x = p.x * this.ratio;
            p.y = p.y * this.ratio;
            clearInterval(animal.animate);
            animal.setPosition(p);

        }
        ;
    }
    move() {
        for (var i = 0; i < this.list.length - 1; i++) {
            var animal = this.list[i];
            var pTarget = new point(this.position[i][0] * this.ratio, this.position[i][1] * this.ratio);

            if (i === 0) {
                animal.jump(pTarget, this.jump * this.ratio);
            } else {
                animal.moveTo(pTarget);
            }
            ;

        }
    }
    addAnimal() {
        var animal;
        var direction = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        switch (Math.floor(Math.random() * 5)) {
            case 0:
                animal = new snake(direction);
                break;
            case 1:
                animal = new monkey(direction);
                break;
            case 2:
                animal = new elephant(direction);
                break;
            case 3:
                animal = new lion(direction);
                break;
            case 4:
                animal = new giraffe(direction);
                break;
        }

        if (this.list.length > this.maxAnimal - 1) {
            this.list[0].remove();
            this.list.shift();
        }
        animal.appendTo(this.dom);
        animal.setWidth(this.animalWidth * this.ratio);
        var p = new point((this.position[this.list.length][0]) * this.ratio, (this.position[this.list.length][1]) * this.ratio);
        animal.setPosition(p);
        this.list.push(animal);
    }

}





