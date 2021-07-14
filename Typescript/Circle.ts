import shape=require("./Ishape");
export class Circle implements shape.IShape{
    public draw(){
        console.log("Circle is drawn in external module circle");
    }
}