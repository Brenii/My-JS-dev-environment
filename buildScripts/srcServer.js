//configuring the web server that will serve up the files in our source dir
var express = require('express');
var path=require('path');
var open=require('open');

var port=2000;
var app= express();

app.get('/',function(req, res){
 res.sendFile(path.join(__dirname,'../src/index.html'));   
});

app.listen(port, function(err){
    if (err){
     console.log(err)   
    }
    else{
        open('http://localhost:'+port);
    }

});
