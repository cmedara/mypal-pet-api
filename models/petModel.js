var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var petModel = new Schema({
    Breed: { type: String, required: true},
    Age: { type: Number, required: true},
    Name: { type: String},
    Price: { type: Number, required: true},
    ListDate: { type: Date, required: true},
    SaleDate: {type: Date}
});

module.exports = mongoose.model('Pet', petModel);