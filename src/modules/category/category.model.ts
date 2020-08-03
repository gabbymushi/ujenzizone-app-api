import {Schema,Document,model} from 'mongoose';
export interface IPayload extends Document {
    name: string,
    description: string
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    }
});
export default model<IPayload>('Category', CategorySchema);