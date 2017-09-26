var express = require('express');
var first_http = express();

first_http.get('/', function(req,res){
    res.send('Hello');
});

first_http.listen(8080, function(){
    console.log('Example');
});