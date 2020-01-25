const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MafundiSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
    },
    middleName: {
        type: String,
        required: [true, 'Middle name is required!'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
    },
    username: {
        type: String,
        required: [true, ' username is required!'],
    },
    gender: {
        type: String,
        enum:['male','female'],
        required: [true, 'Gender is required!'],
    },
    dob: {
        type: Schema.Types.Date,
        required: [true, 'Date of birth is required!'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone no is required!'],
    },
    otherPhoneNumbers: [{
        type: String
    }],
    email:{
        type:String
    }
});
exports=module.exports=mongoose.model('Mafundi',MafundiSchema);