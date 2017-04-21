import {animalCollection} from "./import/animal/animalCollection.js";
import {score} from "./import/score/score.js";
import {motion} from "motion";


var dom =  document.createElement('section');
dom.id = "front";
document.body.appendChild(dom);


var aCollection = new animalCollection();
var aScore = new score();
var graphMotion = new motion();
ratio();
window.onresize = function () {
    ratio();
};

function ratio() {
    var bodyWidth = document.body.clientWidth;
    var ratio = bodyWidth / 1920;

    aCollection.setRatio(ratio);
    graphMotion.setRatio(ratio);
}
graphMotion.mouseFollow(aCollection.list[1].points, callback);

function callback(e) {
    var result = 400 + Math.round(graphMotion.userPrecision / 100000);
    aScore.addScore(result > 0 ? result : -10);
    aCollection.addAnimal();
    aCollection.move();
    graphMotion.mouseFollow(aCollection.list[1].points, callback);
}

document.addEventListener('mousemove', move);
var pPosition = new Array();
function move(e) {
    if (pPosition.length === 500) {
        document.removeEventListener('mousemove', move)

    } else {
        var position = {
            x: e.pageX,
            y: e.pageY
        }
        pPosition.push(position);
    }
}

       