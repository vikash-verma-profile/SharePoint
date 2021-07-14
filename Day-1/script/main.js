function Calculate(input)
{
    var x=parseInt(document.getElementById("txtNumber1").value);
    var y=parseInt(document.getElementById("txtNumber2").value);
   switch(input)
   {
    case 1:
    document.getElementById("txtOuput").value=x+y;
    break;
    case 2:
    document.getElementById("txtOuput").value=x*y;
    break;
    default:
    document.getElementById("txtOuput").innerHTML="Please select correct button";
    }
    
}