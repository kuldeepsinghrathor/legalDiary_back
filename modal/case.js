const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cases = new Schema({
    previous_date:{
        type:Date
    },
    next_date:{
        type:Date
    },
    case_no:{
        type:String
    },
    court_name:{
        type:String
    },
    party_name:{
        type:String
    }
})

module.exports = mongoose.model('case', cases);