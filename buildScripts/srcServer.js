//configuring the web server that will serve up the files in our source dir
var express = require('express');
var path=require('path');
var open=require('open');

/*eslint-disable no-console*/
var port=2000;
var app= express();

app.get('/',function(req, res){
 res.sendFile(path.join(__dirname,'../src/index.html'));   
});
app.get('/users',function(req,res){
    //hard coded for simplicity.Try this with a db
    res.json([
        {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id":2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
        {"id":3,"firstName":"Tina","lastName":"Lee","email":"tina@hotmail.com"}
    ]);
});
app.listen(port, function(err){
    if (err){
     console.log(err)   
    }
    else{
        open('http://localhost:'+port);
    }

});
