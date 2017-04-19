System.register("src/tools/test", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function testU(name) {
        var vm = this;
        var msgDom = document.createElement("div");
        msgDom.className = "test";
        var title = document.createElement("h1");
        var txt = document.createTextNode(name);
        title.appendChild(txt);
        msgDom.appendChild(title);
        document.body.appendChild(msgDom);
        vm.dom = msgDom;
    }
    exports_1("testU", testU);
    var graph;
    return {
        setters: [],
        execute: function () {
            graph = function (dom) {
                var vm = this;
                var canvas = document.createElement("canvas");
                canvas.width = 100;
                canvas.height = 100;
                dom.appendChild(canvas);
                this.ctx = canvas.getContext('2d');
                this.scale = canvas.width / 6;
                this.X = canvas.width;
                this.Y = canvas.height;
                var p1 = { x: this.X / 2, y: 0 };
                var p2 = { x: this.X / 2, y: this.Y };
                var p3 = { x: 0, y: this.Y / 2 };
                var p4 = { x: this.X, y: this.Y / 2 };
                for (var i = 0; i < (this.X / this.scale); i++) {
                    var pT1 = { x: i * this.scale, y: this.Y / 2 - 2 };
                    var pT2 = { x: i * this.scale, y: this.Y / 2 + 2 };
                    this.drawligne(pT1, pT2);
                }
                for (var i = 0; i < (this.Y / this.scale); i++) {
                    var pT1 = { y: i * this.scale, x: this.X / 2 - 2 };
                    var pT2 = { y: i * this.scale, x: this.X / 2 + 2 };
                    this.drawligne(pT1, pT2);
                }
                this.drawligne(p1, p2);
                this.drawligne(p3, p4);
                vm.dom = canvas;
            };
            graph.prototype.drawpoint = function (p1, color) {
                if (!color)
                    color = '#FF5050';
                this.ctx.strokeStyle = color;
                this.ctx.beginPath();
                this.ctx.arc(p1.x, p1.y, 2, 0, 2 * Math.PI, true);
                this.ctx.stroke();
                this.ctx.closePath();
            };
            graph.prototype.drawligne = function (p1, p2, color) {
                if (!color)
                    color = '#8B5E3C';
                this.ctx.strokeStyle = color;
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
                this.ctx.closePath();
            };
            graph.prototype.vector2D = function (v) {
                this.point2D(v.p1);
                this.point2D(v.p2, "#990099");
                this.ligne2D(v.p1, v.p2);
            };
            graph.prototype.scalePoint = function (p1) {
                var pS = { x: 0, y: 0 };
                pS.x = this.scale * p1.x;
                pS.x = pS.x + (this.X / 2);
                pS.y = this.scale * p1.y;
                pS.y = pS.y + (this.Y / 2);
                return pS;
            };
            graph.prototype.point2D = function (p1, color) {
                var pS1 = this.scalePoint(p1);
                this.drawpoint(pS1, color);
            };
            graph.prototype.ligne2D = function (p1, p2, color) {
                var pS1 = this.scalePoint(p1);
                var pS2 = this.scalePoint(p2);
                this.drawligne(pS1, pS2, color);
            };
            ;
            testU.prototype.graph = function () {
                return new graph(this.dom);
            };
            testU.prototype.log = function (message) {
                switch (typeof (message)) {
                    case "number":
                        message = message.toString();
                    case "string":
                        this.dom.insertAdjacentHTML('beforeend', "<p>" + message + "</p>");
                        break;
                    case "object":
                        this.dom.insertAdjacentHTML('beforeend', "<p>" + JSON.stringify(message) + "</p>");
                        break;
                    default:
                        this.dom.insertAdjacentHTML('beforeend', "<p>" + typeof (message) + "</p>");
                        break;
                }
            };
            testU.prototype.logMethode = function (obj) {
                for (var i in obj) {
                    this.log("prototype : " + i);
                }
            };
        }
    };
});
System.register("src/math/toolsAngle", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var toolsAngle;
    return {
        setters: [],
        execute: function () {
            toolsAngle = (function () {
                function toolsAngle() {
                }
                toolsAngle.toRad = function (deg) {
                    return Math.PI * (deg) / 180;
                };
                toolsAngle.toDeg = function (rad) {
                    return 180 * (rad) / Math.PI;
                };
                return toolsAngle;
            }());
            exports_2("toolsAngle", toolsAngle);
        }
    };
});
System.register("src/math/toolsNumber", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var toolsNumber;
    return {
        setters: [],
        execute: function () {
            toolsNumber = (function () {
                function toolsNumber() {
                }
                toolsNumber.sign = function (val) {
                    return val > 0 ? 1 : val < 0 ? -1 : 0;
                };
                ;
                return toolsNumber;
            }());
            exports_3("toolsNumber", toolsNumber);
        }
    };
});
System.register("src/math/toolsVector", ["src/math/vector", "src/math/point", "src/math/toolsAngle", "src/math/toolsNumber"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var vector_1, point_1, toolsAngle_1, toolsNumber_1, toolsVector;
    return {
        setters: [
            function (vector_1_1) {
                vector_1 = vector_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (toolsAngle_1_1) {
                toolsAngle_1 = toolsAngle_1_1;
            },
            function (toolsNumber_1_1) {
                toolsNumber_1 = toolsNumber_1_1;
            }
        ],
        execute: function () {
            toolsVector = (function () {
                function toolsVector() {
                }
                toolsVector.pointBelong = function (v1, p1) {
                    var v2 = new vector_1.vector();
                    v2.setPoint(v1.p1, p1);
                    var vP = v2.vectorProduct(v1);
                    if (vP.vx == 0 && vP.vy == 0 && vP.vz == 0) {
                        var sP1 = v2.scalarProduct(v1);
                        var sP2 = v1.scalarProduct(v1);
                        if (0 <= sP1 && sP1 <= sP2) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                };
                toolsVector.angleBetweenVector = function (v1, v2, type) {
                    var vN1, vN2, vS, angle;
                    vN1 = toolsVector.normalize(v1);
                    vN2 = toolsVector.normalize(v2);
                    vS = toolsVector.scalarProduct(vN1, vN2);
                    if (toolsNumber_1.toolsNumber.sign(vS) === -1) {
                        angle = -Math.acos(vS);
                    }
                    else {
                        angle = Math.acos(vS);
                    }
                    switch (type) {
                        case "rad":
                            return angle;
                            break;
                        case "deg":
                        default:
                            return toolsAngle_1.toolsAngle.toDeg(angle);
                            break;
                    }
                };
                toolsVector.vectorProduct = function (v1, v2) {
                    var vS = v1.toString();
                    var vS2 = v2.toString();
                    if ((vS === "[object vector]" && vS2 === "[object vector]")) {
                        var x = Math.round((v1.vy * (v2.vz) - v2.vy * (v1.vz)) * 100) / 100;
                        var y = Math.round((v1.vz * v2.vx - (v2.vz) * v1.vx) * 100) / 100;
                        var z = Math.round((v1.vx * v2.vy - v2.vx * v1.vy) * 100) / 100;
                        var v = new vector_1.vector(x, y, z);
                        return (v);
                    }
                    else {
                        throw new Error("vectorProduct() The arguments must be a vector");
                    }
                    return false;
                };
                toolsVector.scalarProduct = function (v1, v2) {
                    if (typeof v1 == "object" && typeof v2 == "object") {
                        var vS = v1.toString();
                        var vS2 = v2.toString();
                        if ((vS === "[object vector]" && vS2 === "[object vector]")) {
                            var result = (v1.vx * v2.vx) + (v1.vy * v2.vy) + (v1.vz * v2.vz);
                            return parseFloat(result);
                        }
                        else {
                            throw new Error("scalarProduct() The arguments must be a vector");
                        }
                        throw new Error("scalarProduct() The arguments must be a object");
                    }
                    return false;
                };
                toolsVector.normalize = function (v1) {
                    var norme = Math.sqrt(v1.vx * v1.vx + v1.vy * v1.vy + v1.vz * v1.vz);
                    var v = new vector_1.vector(v1.vx / norme, v1.vy / norme, v1.vz / norme);
                    v.p1 = new point_1.point(0, 0, 0);
                    v.p2 = new point_1.point(v.vx, v.vy, v.vz);
                    return (v);
                };
                toolsVector.cross = function (v1, v2) {
                    if (v1.p1 && v1.p2 && v2.p1 && v2.p2) {
                        var a = v1.vy === 0 ? 0 : (v1.vy) / (v1.vx);
                        var b = v1.p1.y - (a * v1.p1.x);
                        var c = v2.vy === 0 ? 0 : (v2.vy) / (v2.vx);
                        var d = v2.p1.y - (c * v2.p1.x);
                        var x = (d - b) / (a - c);
                        var y = a * x + b;
                        return new point_1.point(x, y);
                    }
                    else {
                        throw new Error("cross() The arguments must be a vector with point");
                    }
                    return false;
                };
                return toolsVector;
            }());
            exports_4("toolsVector", toolsVector);
        }
    };
});
System.register("src/math/vector", ["src/math/toolsPoint", "src/math/toolsVector"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function vector(vx, vy, vz) {
        this.vx = vx ? vx : 0;
        this.vy = vy ? vy : 0;
        this.vz = vz ? vz : 0;
    }
    exports_5("vector", vector);
    var toolsPoint_1, toolsVector_1;
    return {
        setters: [
            function (toolsPoint_1_1) {
                toolsPoint_1 = toolsPoint_1_1;
            },
            function (toolsVector_1_1) {
                toolsVector_1 = toolsVector_1_1;
            }
        ],
        execute: function () {
            vector.prototype.toString = function () {
                return "[object vector]";
            };
            vector.prototype.setPoint = function (p1, p2) {
                if (p1.toString() === "[object point]" && p2.toString() === "[object point]") {
                    var V = toolsPoint_1.toolsPoint.vectorBetween(p1, p2);
                    this.vx = V.vx;
                    this.vy = V.vy;
                    this.vz = V.vz;
                    this.p1 = p1;
                    this.p2 = p2;
                    this.distance = p1.distance(p2);
                    this.angle = {
                        x: Math.atan2(this.vy, this.vx) + Math.PI
                    };
                }
                else {
                    throw new Error("setPoint() The arguments must be a point");
                }
            };
            vector.prototype.vectorProduct = function (v2) {
                return toolsVector_1.toolsVector.vectorProduct(this, v2);
            };
            vector.prototype.scalarProduct = function (v2) {
                return toolsVector_1.toolsVector.scalarProduct(this, v2);
            };
            vector.prototype.normalize = function () {
                return toolsVector_1.toolsVector.normalize(this);
            };
            vector.prototype.cross = function (v2) {
                return toolsVector_1.toolsVector.cross(this, v2);
            };
            vector.prototype.angleBetweenVector = function (v2, type) {
                return toolsVector_1.toolsVector.angleBetweenVector(this, v2, type);
            };
            vector.prototype.pointBelong = function (p1) {
                return toolsVector_1.toolsVector.pointBelong(this, p1);
            };
        }
    };
});
System.register("src/math/toolsPoint", ["src/math/point", "src/math/vector", "src/math/toolsAngle"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var point_2, vector_2, toolsAngle_2, toolsPoint;
    return {
        setters: [
            function (point_2_1) {
                point_2 = point_2_1;
            },
            function (vector_2_1) {
                vector_2 = vector_2_1;
            },
            function (toolsAngle_2_1) {
                toolsAngle_2 = toolsAngle_2_1;
            }
        ],
        execute: function () {
            toolsPoint = (function () {
                function toolsPoint() {
                }
                toolsPoint.vectorBetween = function (p1, p2) {
                    var v = new vector_2.vector(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
                    v.p1 = p1;
                    v.p2 = p2;
                    return (v);
                };
                toolsPoint.distance = function (p1, p2) {
                    if (p1 && p2) {
                        if (typeof p1.x === "number" && typeof p1.y === "number") {
                            if (typeof p2.x === "number" && typeof p2.y === "number") {
                                if (typeof p1.z === "number" || typeof p2.z === "number") {
                                    p1.z = p1.z ? p1.z : 0;
                                    p2.z = p2.z ? p2.z : 0;
                                    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2) + Math.pow((p1.z - p2.z), 2));
                                }
                                else
                                    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
                            }
                            else {
                                throw new Error("distance() x & y from second argument must be a number");
                            }
                        }
                        else {
                            throw new Error("distance() x & y from first argument must be a number");
                        }
                    }
                    else
                        throw new Error("distance() need two arguments ");
                    return false;
                };
                toolsPoint.rotation = function (p, pCenter, angle, plan) {
                    if (typeof plan === "undefined")
                        plan = "xy";
                    if (typeof angle === "string" || typeof angle === "number") {
                        if (typeof angle === "string") {
                            var s = angle.substring(angle.length - 3, angle.length);
                            angle = angle.trim();
                            angle = angle.replace("PI", Math.PI);
                            switch (s) {
                                case "rad":
                                    angle = angle.substring(0, angle.length - 3);
                                    angle = eval(angle);
                                    break;
                                case "deg":
                                    angle = angle.substring(0, angle.length - 3);
                                default:
                                    angle = eval(angle);
                                    angle = toolsAngle_2.toolsAngle.toRad(angle);
                                    break;
                            }
                        }
                        else {
                            angle = toolsAngle_2.toolsAngle.toRad(angle);
                        }
                        switch (plan) {
                            case "xz":
                                throw new Error("rotation(xz) you need to calculate it yet");
                                break;
                            case "xy":
                            default:
                                var diffXT = p.x - pCenter.x;
                                var diffYT = p.y - pCenter.y;
                                var x, y;
                                x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
                                y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
                                x = Math.round(x * 100) / 100;
                                y = Math.round(y * 100) / 100;
                                var position = new point_2.point((x + pCenter.x), (y + pCenter.y));
                                return position;
                                break;
                        }
                    }
                    else {
                        return false;
                    }
                };
                return toolsPoint;
            }());
            exports_6("toolsPoint", toolsPoint);
            ;
        }
    };
});
System.register("src/math/point", ["src/math/toolsPoint", "src/math/vector"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function point(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = z | 0;
    }
    exports_7("point", point);
    var toolsPoint_2, vector_3;
    return {
        setters: [
            function (toolsPoint_2_1) {
                toolsPoint_2 = toolsPoint_2_1;
            },
            function (vector_3_1) {
                vector_3 = vector_3_1;
            }
        ],
        execute: function () {
            ;
            point.prototype.toString = function () {
                return "[object point]";
            };
            point.prototype.rotation = function (point2, angle, plan) {
                var V = toolsPoint_2.toolsPoint.rotation(this, point2, angle, plan);
                this.x = V.x;
                this.y = V.y;
                this.z = V.z;
            };
            point.prototype.distance = function (p2) {
                return toolsPoint_2.toolsPoint.distance(this, p2);
            };
            point.prototype.vector = function (p2) {
                var v = toolsPoint_2.toolsPoint.vector(this, p2);
                v.p1 = this;
                v.p2 = p2;
                return v;
            };
            point.prototype.zTriangle = function (p1, p2, p3) {
                var v1 = new vector_3.vector();
                v1.setPoint(p1, p2);
                var v2 = new vector_3.vector();
                v2.setPoint(p1, p3);
                var N = v1.vectorProduct(v2);
                this.z = -(N.vx * (this.x - p1.x) + N.vy * (this.y - p1.y)) / N.vz + p1.z;
                return this;
            };
        }
    };
});
System.register("demo/math/boot", ["src/tools/test", "src/math/point", "src/math/vector", "src/math/toolsVector", "src/math/toolsPoint"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var test_1, point_3, vector_4, toolsVector_2, toolsPoint_3, mocha;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            },
            function (point_3_1) {
                point_3 = point_3_1;
            },
            function (vector_4_1) {
                vector_4 = vector_4_1;
            },
            function (toolsVector_2_1) {
                toolsVector_2 = toolsVector_2_1;
            },
            function (toolsPoint_3_1) {
                toolsPoint_3 = toolsPoint_3_1;
            }
        ],
        execute: function () {
            mocha = (function () {
                function mocha() {
                    this.test = new test_1.testU("MATH.JS");
                    this.v0 = new point_3.point(0, 0);
                    this.v1 = new point_3.point(1, 1);
                    this.v2 = new point_3.point(0, 2);
                    this.v3 = new point_3.point(0, 2);
                    this.v4 = { x: 2 };
                    this.V0 = new point_3.point(0, 0, 0);
                    this.V1 = new point_3.point(0, 0, 1);
                    this.V2 = new point_3.point(0, 1, 1);
                    this.pointBelong();
                    this.distance2D();
                    this.distance3D();
                    this.rotation3D();
                    this.rotation2D();
                    this.cross();
                    this.normalize();
                    this.zTriangle();
                }
                mocha.prototype.pointBelong = function () {
                    this.test.log("<br/>POINT BELONG");
                    var graph = this.test.graph();
                    var p0 = new point_3.point(0, 0, 0);
                    var p1 = new point_3.point(2, 0, 0);
                    var p3 = new point_3.point(1, 0, 0);
                    var p4 = new point_3.point(3, 0, 0);
                    var p5 = new point_3.point(1, 2, 0);
                    var p6 = new point_3.point(0, 0, 1);
                    graph.point2D(p3);
                    graph.point2D(p4);
                    graph.point2D(p5);
                    graph.point2D(p6);
                    var v = new vector_4.vector();
                    v.setPoint(p0, p1);
                    graph.vector2D(v);
                    this.test.log("0, 0, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p0));
                    this.test.log("1, 0, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p3));
                    this.test.log("3, 0, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p4));
                    this.test.log("1, 2, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p5));
                    this.test.log("0, 0, 1 : " + toolsVector_2.toolsVector.pointBelong(v, p6));
                };
                mocha.prototype.distance2D = function () {
                    this.test.log("<br/>DISTANCE");
                    var graph = this.test.graph();
                    graph.ligne2D(this.v1, this.v2);
                    graph.point2D(this.v1);
                    graph.point2D(this.v2);
                    this.test.log("distance Self: " + this.v1.distance(this.v2));
                    this.test.log("distance Math: " + toolsPoint_3.toolsPoint.distance(this.v1, this.v2));
                    var graph = this.test.graph();
                    graph.point2D(this.v1);
                    graph.point2D(this.v3);
                    graph.ligne2D(this.v1, this.v3);
                    this.test.log("distance Self: " + this.v1.distance(this.v3));
                    this.test.log("distance Math: " + toolsPoint_3.toolsPoint.distance(this.v1, this.v3));
                    try {
                        this.test.log(this.v1.distance());
                    }
                    catch (e) {
                        this.test.log(e.toString());
                    }
                    try {
                        this.test.log(this.v1.distance(this.v4));
                    }
                    catch (e) {
                        this.test.log(e.toString());
                    }
                };
                mocha.prototype.distance3D = function () {
                    this.test.log("<br/>DISTANCE 3D");
                    this.test.log(this.V0);
                    this.test.log(this.V1);
                    this.test.log("distance Self: " + this.V1.distance(this.v0));
                    this.test.log("distance Math: " + toolsPoint_3.toolsPoint.distance(this.V1, this.V2));
                };
                mocha.prototype.rotation3D = function () {
                    this.test.log("<br/>ROTATION 3D");
                    this.v0 = new point_3.point(0, 0, 0);
                    this.v1 = new point_3.point(0, 1, 0);
                    try {
                        toolsPoint_3.toolsPoint.rotation(this.v1, this.v0, 90, "xz");
                    }
                    catch (e) {
                        this.test.log(e.toString());
                    }
                };
                mocha.prototype.rotation2D = function () {
                    this.test.log("<br/>ROTATION");
                    this.test.log("rotation 90");
                    var graph = this.test.graph();
                    graph.point2D(this.v0);
                    graph.point2D(this.v1, "#990099");
                    graph.point2D(toolsPoint_3.toolsPoint.rotation(this.v1, this.v0, 90), "#1F001F");
                    var v4 = new point_3.point(1, 0);
                    this.test.log("<br/>");
                    this.test.log("rotation -180");
                    var graph = this.test.graph();
                    graph.point2D(v4);
                    graph.point2D(this.v0, "#990099");
                    graph.point2D(toolsPoint_3.toolsPoint.rotation(this.v0, v4, -180), "#1F001F");
                    this.test.log("<br/>");
                    this.test.log("rotation self 45 deg");
                    var graph = this.test.graph();
                    graph.point2D(this.v2);
                    graph.point2D(this.v1, "#990099");
                    this.v1.rotation(this.v2, "45 deg");
                    graph.point2D(this.v1, "#1F001F");
                    this.test.log("<br/>");
                    this.test.log("rotation Math.PI/4 SELF");
                    var graph = this.test.graph();
                    graph.point2D(this.v2);
                    graph.point2D(this.v0, "#990099");
                    this.v0.rotation(this.v2, (Math.PI / 4) + "rad");
                    graph.point2D(this.v0, "#1F001F");
                    this.test.log("<br/>");
                    this.test.log("rotation Math.PI/4 string SELF");
                    var graph = this.test.graph();
                    graph.point2D(this.v1);
                    graph.point2D(this.v2, "#990099");
                    this.v2.rotation(this.v1, "PI/4 rad");
                    graph.point2D(this.v2, "#1F001F");
                };
                mocha.prototype.cross = function () {
                    this.test.log("<br/>CROSS");
                    var graph = this.test.graph();
                    this.v1 = new point_3.point(1, 1, 0);
                    this.v2 = new point_3.point(0, 1, 0);
                    this.v0 = new point_3.point(1, 2, 0);
                    this.v3 = new point_3.point(2, 0, 0);
                    var vector1 = (toolsPoint_3.toolsPoint.vectorBetween(this.v0, this.v3));
                    graph.vector2D(vector1);
                    var vector2 = new vector_4.vector();
                    vector2.setPoint(this.v1, this.v2);
                    graph.vector2D(vector2);
                    var vCross = (vector2.cross(vector1));
                    this.test.log(vCross);
                    graph.point2D(vCross);
                };
                mocha.prototype.normalize = function () {
                    this.v0 = new point_3.point(0, 0, 0);
                    this.v1 = new point_3.point(2, 0, 0);
                    this.v2 = new point_3.point(1, 0, 0);
                    this.v3 = new point_3.point(0, 2, 0);
                    var vector1 = (toolsPoint_3.toolsPoint.vectorBetween(this.v0, this.v1));
                    var vector2 = (toolsPoint_3.toolsPoint.vectorBetween(this.v2, this.v3));
                    this.test.log("<br/>NORMALIZE");
                    this.test.log(vector1);
                    this.test.log(toolsVector_2.toolsVector.normalize(vector1));
                    var vector3 = new vector_4.vector();
                    vector3 = vector1.normalize();
                    var vector4 = new vector_4.vector();
                    vector4 = vector2.normalize();
                    var graph = this.test.graph();
                    graph.vector2D(vector3);
                    graph.vector2D(vector4);
                    this.test.log(vector2.scalarProduct(vector4));
                    var graph = this.test.graph();
                    graph.vector2D(vector1);
                    graph.vector2D(vector2);
                    this.test.log(toolsVector_2.toolsVector.angleBetweenVector(vector1, vector2));
                };
                mocha.prototype.zTriangle = function () {
                    this.test.log("<br/>Z IN A PLAN TRIANGLE");
                    var p0, p1, p2, p3;
                    p0 = new point_3.point(0, 0, 0);
                    p1 = new point_3.point(2, 0, 1);
                    p2 = new point_3.point(0, 3, 1);
                    p3 = new point_3.point(0.5, 0.5, 0);
                    this.test.log(p0);
                    this.test.log(p1);
                    this.test.log(p2);
                    this.test.log("point in a PLAN Triangle");
                    this.test.log(p3);
                    var graph = this.test.graph();
                    graph.ligne2D(p0, p1);
                    graph.ligne2D(p0, p2);
                    graph.ligne2D(p1, p2);
                    graph.point2D(p3, "1F001F");
                    this.test.log(p3.zTriangle(p0, p1, p2));
                };
                return mocha;
            }());
            new mocha();
        }
    };
});
