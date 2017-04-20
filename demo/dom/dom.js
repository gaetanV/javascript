import {testU} from "test";

import {domClass} from "domClass";
import {domInsert} from "domInsert";
import {domCss} from "domCss";
import {domAnimate} from "domAnimate";

var test = new testU("HTMELEMENT.JS");
var re = {
    er: "tst",
    r: "dsfl"
}
var domDiv = document.createElement("div");
// test.logMethode(domDiv);
var domP = document.createElement("p");
var txt = document.createTextNode("Texte Base");
domP.appendChild(txt);
domDiv.appendChild(domP);
test.dom.appendChild(domDiv);
cssTest(domDiv);
classManipulateTest(domP);
domInsertTest(domP);

animate(domDiv);

function animate(domDiv) {
    domDiv = domCss(domDiv);
    domDiv = domAnimate(domDiv);
    domDiv.css("position", "absolute").css("top", "0").animate({left: "200"}, 1000).css("color", "blue").delay(2000).animate({top: "200"}, 1000);
}

function classManipulateTest(domP) {
    domP = domClass(domP);
    domP.addClass("myClass yourClass");
    domP.addClass("test2");
    domP.addClass(re);
    test.log(domP.className);
    domP.removeClass("myClass");
    domP.removeClass("yourClass test2");
    domP.addClass("  %test   ");
    test.log(domP.className);
}

function domInsertTest(domP) {
    domP = domInsert(domP);
    domP.append("</br>append BJ <div> append OK</div>");
    var domP3 = document.createElement("div");
    var domP2 = document.createElement("p");
    domP2.append("append salut");
    domP.append(domP2);
    domP.append(domP3);
    domP.append(re);
    var txt2 = document.createTextNode("prepend Hello 2");
    domP.prepend("<div>prepend</div>");
    domP.prepend(txt2);
    domDiv.before("<div>before 1</div>");
    var txt3 = document.createTextNode("before Hello 2");
    domDiv.before(txt3);
    domDiv.before("<div>before 3</div>");
    var txt4 = document.createTextNode("after Hello 2");
    domDiv.after("<div>after 1</div>");
    domDiv.after(txt4);
    domDiv.after("<div>after 3</div>");
}


function cssTest(domDiv) {
    domDiv = domCss(domDiv);
    domDiv.css("  background-color ", " red ");
    var bgColor = domDiv.css("background-color");
    test.log("bgColor: " + bgColor);
    bgColor = "blue";
    domDiv.css("height", "+=200");
    domDiv.css("height", "20%");
    domDiv.css("width", "500");
    domDiv.css("width", "-=200px");
    domDiv.css("width", "+=500");
    domDiv.css("width", "*=2");
    domDiv.css("width", "/=3");
    domDiv.css("width", function () {
        alert("test");
    });
    domDiv.css("height", "+=AA");
    domDiv.css("height", "+=5");
    test.log("height: " + domDiv.css("height"));
    test.log("width: " + domDiv.width());
    test.log("height: " + domDiv.height());
}
