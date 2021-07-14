"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Circle is drawn in external module triangle");
    };
    return Triangle;
}());
exports.Triangle = Triangle;
