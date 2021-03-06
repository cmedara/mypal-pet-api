var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/petAPI');
var Pet = require('./models/petModel');
var app = express();

var port = process.env.PORT || 3000;



app.use(express.static('./client'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var petRouter = require('./routes/petRoutes')(Pet);
app.use('/api', petRouter);
app.get('/', function(req, res){
    res.send('welcome to MyPal Pet API');
});

app.listen(port, function(){
    console.log('Running on PORT:' + port);
});