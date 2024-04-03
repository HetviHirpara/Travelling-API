const mongoose = require("mongoose");

const Countryschema = mongoose.Schema({
    CountryName : String ,
    Contryphone_code : String,
    Countryregion : String,
    Countrystates : String
});

module.exports = mongoose.model('Country' , Countryschema);
