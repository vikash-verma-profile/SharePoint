class Shape{  //parent class
    Area:Number;

    constructor(a:Number)
    {
        this.Area=a;
    }
}
class Circle extends Shape{ //child
    Display():void{
        console.log("Area of the circle"+this.Area);
    }
}

var obj=new Circle(2);
obj.Display();