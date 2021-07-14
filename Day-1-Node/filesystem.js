var fs= require('fs');
var http=require('http');

http.createServer(function(req,res){
    // fs.readFile('sample.txt',function(err,data){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(data);
    //    return res.end();
    // });
    fs.appendFile('sample.txt',"I am new Content",function(err,data){
        
      console.log("Saved ");
    });
}).listen(8080);