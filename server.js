var express = require('express'); //name package('')
var app = express();
var bodyParser = require('body-parser'); //in node_module ('')
var user = require('./users.js'); //use file in file tall path('./....name file...')

function logger(req,res,next){
    console.log(new Date(), req.method, req.url);
    next();
    }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(logger); //use all request
app.use(express.static('www')) // time run http://localhost:3000/welcome.html


app.get('/users',user.findAll);
app.get('/users/search',user.search);
app.get('/users/role/:role',user.role);


app.get('/now',function(request, response){
    var now = new Date();
    response.send("Now: \n" + now);
});


app.get('/json',function(request, response){
    var user = {id:111, name:"User111"};
    response.json(user);
});
app.listen(3000); //port that run at port3000 
console.log('Server is running at http://localhost:3000');