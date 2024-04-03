const  mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Traveling_Pr').then(() => {
    console.log('db connected...')
}).catch((er) => {
    console.log('db error...',er);
});

module.exports = mongoose