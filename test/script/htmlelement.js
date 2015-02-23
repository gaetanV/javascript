//TEST HTMELEMENT.JS
(function() {
    'use strict';
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

    /*CSS*/
    css();

    /*CSS + PROCESS ( -= | += | *= | /= )*/
    cssProcess();

    /*ADD CLASS + REMOVE CLASS*/
    classManipulate();

    /*APPEND PREPEND*/
    domInsert();
    
    
    dom();


    function css() {
        //espace before and after//
        domDiv.css("  background-color ", " red ");
        var bgColor = domDiv.css("background-color");
        test.log("bgColor: " + bgColor);
        bgColor = "blue"; //TODO ? Not work
        //increment value not init//
        domDiv.css("height", "+=200");
        domDiv.css("height", "20%");
        //without px//
        domDiv.css("width", "500");

    }

    function cssProcess() {
        domDiv.css(re);
        //increment px//
        domDiv.css("width", "-=200px");
        domDiv.css("width", "+=500");
        domDiv.css("width", "*=2");
        domDiv.css("width", "/=3");
        //css function//
        domDiv.css("width", function() {
            alert("test");
        });
        //increment string//
        domDiv.css("height", "+=AA");
        domDiv.css("height", "+=5");
        test.log("height: " + domDiv.css("height"));
    }

    function classManipulate() {
        domP.addClass("myClass yourClass");
        domP.addClass("test2");
        domP.addClass(re);
        domP.removeClass("myClass");
        domP.removeClass("yourClass test2");
        domP.addClass("  %test   ");
        test.log(domP.className);
    }

    function domInsert() {
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
    
    function dom() {
        test.log("width: "+domDiv.width());
          test.log("height: "+domDiv.height());
    };

})();