const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    image:{
        type:String,
        

    },
    money:{
        type:Number,

    },
    
    isAdmin:{
        type:Boolean,
        default:false

    }
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);

