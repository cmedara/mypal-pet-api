var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/petAPI');
var Pet = require('./models/petModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var petRouter = express.Router();
petRouter.route('/pets')
    .get(function(req,res){
        Pet.find(function(err, pets){
            if(err)
                res.status(500).send(err);
            else
                res.json(pets);
    });
});
petRouter.route('/pet')
    .post(function(req,res){
        var pet = new Pet(req.body);
        pet.save();
        res.status(201).send(pet);
});
petRouter.route('/pet/:id')
    .get(function(req,res){
        Pet.findById(req.params.id,function(err, pet){
            if(err)
                res.status(500).send(err);
            else
                res.json(pet);
    });
});
app.use('/api', petRouter);
app.get('/', function(req, res){
    res.send('welcome to MyPal Pet API');
});

app.listen(port, function(){
    console.log('Running on PORT:' + port);
});