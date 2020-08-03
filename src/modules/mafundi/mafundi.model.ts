import { Schema, Document, model } from 'mongoose';
export interface IMafundi extends Document {
    fundi: string,
    category: string
};
const MafundiSchema = new Schema({
    fundi: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID  is required!'],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category  is required!'],
    }
});
export default model<IMafundi>('Mafundi', MafundiSchema);