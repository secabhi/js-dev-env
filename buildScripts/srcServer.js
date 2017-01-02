var express = require('express');
var path = require('path');
var open = require('open');

var port = 3001;
var app =express();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'))
})

app.listen(port,function(err){
  if(err){
    console.log('==>',err);
  }
  else{
    open('http://localhost:'+port)
  }
})
