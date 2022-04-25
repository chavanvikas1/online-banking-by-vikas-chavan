const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    reciver:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
},{timestamps: true});
module.exports = mongoose.model('payment', UserSchema);
                                                                                                                                                                                                                                  