import * as mongoose from 'mongoose';

export default async () => {
    try {
        const DB_URL=process.env.DATABASE as string;
        const connection = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Database connected`)
    } catch (e) {
        console.log(`Database not connected due to `,e.message)
    }
}
