const mongoose = require ('mongoose');

const Dataschema = mongoose.Schema({

    id: String,
    name: String,
    numeric_code: String,
    phone_code: String,
    capital: String,
    currency: String,
    currency_name: String,
    currency_symbol: String,
    tld: String,
    region: String,
    region_id: String,
    subregion: String,
    subregion_id: String,
    nationality : String,
    timezones: Array,
    translations: Object,
    emoji: String,
    states: Array

});

module.exports = mongoose.model('Data' , Dataschema);

