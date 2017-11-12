var express = require ('express');
var app = express();
//for 
app.get('/', function(req, res){
  res.send("hello world");
})

var server= app.listen(3000, function(){
  console.log("listening 3000...");
});
