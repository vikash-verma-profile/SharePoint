var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    //function
    Car.prototype.display = function () {
        console.log("Engine is " + this.engine);
    };
    return Car;
}());
var Obj = new Car("R15");
console.log(Obj.engine); // field
console.log(Obj.display()); // function
