"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Circle is drawn in external module circle");
    };
    return Circle;
}());
exports.Circle = Circle;
