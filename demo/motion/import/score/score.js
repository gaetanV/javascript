export class score {
    constructor() {
        this.dom = document.createElement('score');
        document.body.appendChild(this.dom);
        this.score = 0;
        this.dom.innerHTML = this.score.toString();
    }
    addScore = function (value) {
        if (parseInt(value) < 0) {
            this.dom.style.color = "red";
        } else {
            this.dom.style.color = "white";
        }
        this.dom.innerHTML = Math.round(value).toString();
        this.score += value;
    }
}

