import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlimit: [50, 'characters more than 50 not allowed'],
    },
    author: {
        type: String,
        default: 'Unknown',
        maxlimit: [20, 'characters more than 20 not allowed'],
    }
})

export default mongoose.model('Book', BookSchema)