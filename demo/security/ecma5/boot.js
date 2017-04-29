import {ecma5Private} from "ecma5Private";
import {$} from "ecma5Private";


var core = function () {
    var $ = new ecma5Private(core);
    /*
     $(this).name    => private
     this.name       => public
     $().name        => public static
     var name        => private static
     */
    /* @SET public static function */ 
    $().test2 = function () {
        console.log("test2");
    }
    /* @SET private static         */ var p = "b";
    function core(_private, _static) {
        Object.defineProperty(this, 'instance', {value: $().commonSpace++, writable: false, enumerable: false, configurable: false});
        /* @SET private attribute       */ $(this).test = _private;
        /* @SET private function        */ $(this).ftest = function () {
            console.log("ftest");
        };
        /* @SET public static attribute */ $().static = _static;
        /* @SET public attribute        */ this.a = "a";
    }
    /* @SET public function */ core.prototype.test = function () {
        console.log($(this).test);
        $(this).ftest();
    };
    return core;
}();

// get public static function
$(core).test2();
var c1 = new core("private1", "static1");
c1.test();
console.log(c1.a);
var c2 = new core("private2", "static2");
c2.test();
// get public static
console.log($(core));