import mongoose from 'mongoose'
const uri = String(process.env.DB_STRING)

const connection = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export { connection } 