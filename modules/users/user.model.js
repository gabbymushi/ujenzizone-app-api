const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    userType: {
        type: String,
        enum:['fundi','user','admin'],
        required: [true, 'User type is required!'],
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
exports=module.exports=mongoose.model('User',UserSchema);