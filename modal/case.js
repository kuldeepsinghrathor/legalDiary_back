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
    },
    case_type:{
        type:String
    },
    case_stage:{
        type:String
    },
    user_name:{
        type:String
    },
    email:{
        type:String
    },
    advance_payment:{
        type:String
    },
    pending_payment:{
        type:String
    },
    total_payment:{
        type:String
    }
})

module.exports = mongoose.model('case', cases);