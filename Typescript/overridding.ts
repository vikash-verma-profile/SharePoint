class PrinterClass{
    doPrint():void{
        console.log("Parent class is called");
    }
}
class StringPrinter extends PrinterClass{
    doPrint():void{
        super.doPrint();
        console.log("Child class is called");
    }
}
var obj=new StringPrinter();
obj.doPrint();