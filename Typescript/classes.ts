class Car{
    //field
    engine:string;
    constructor(engine:string){
        this.engine=engine;
    }
    //function
    display():void{
        console.log("Engine is "+ this.engine);
    }
}

var Obj=new Car("R15");
console.log(Obj.engine);// field
console.log(Obj.display());// function

