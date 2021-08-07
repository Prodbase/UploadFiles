import mongoose from 'mongoose'

interface TemplateProps extends mongoose.Document {
    name: string
    category: [string]
    image: string
    url: string
}

const TemplateSchema = new mongoose.Schema({
    name: String,
    category: [],
    image: String,
    url: String
})

const Template = mongoose.model<TemplateProps>("Template", TemplateSchema)
export { Template }