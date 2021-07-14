import shape=require("./Ishape");
export class Triangle implements shape.IShape{
    public draw(){
        console.log("Circle is drawn in external module triangle");
    }
}