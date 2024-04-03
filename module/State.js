const mongoose = require ('mongoose');

const Stateschema = mongoose.Schema({
    StateName : String ,
    StateCode : String,
    CountryName : String,
    CountryCode : String
});

module.exports = mongoose.model('State' , Stateschema);