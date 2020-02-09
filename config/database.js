const mongoose=require('mongoose');
module.exports = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Database connected`)
    } catch (e) {
        console.log(`Database not connected due to `,e.message)
    }
}
