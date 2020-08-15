import { Schema, Document, model } from 'mongoose';
export interface IUser extends Document {
    firstName: string,
    middleName: string,
    lastName: string,
    username: string,
    gender: string,
    dob: string,
    phoneNumber: string,
    otherPhoneNumber: string,
    email: string
}

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
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'Gender is required!'],
    },
    /*     userType: {
            type: String,
            enum:['fundi','user','admin'],
            required: [true, 'User type is required!'],
        }, */
    dob: {
        type: Schema.Types.Date,
        required: [true, 'Date of birth is required!'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone no is required!'],
    },
    otherPhoneNumber: {
        type: String
    },
    email: {
        type: String
    }
});
export default model<IUser>('User', UserSchema);