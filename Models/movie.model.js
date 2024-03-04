import mongoose from "mongoose"

// model is blue print of document.

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter the movie name'],
        unique: true
    },
    description: String,
    duration: {
        type: Number,
        required: [true, 'Duration is required field']//it's validator
    },
    ratings: {
        type: Number,
        default: 1.0
    },
    //in mongodb we use the double.
})//we use the second argument 
const Movie = mongoose.model('Movies', movieSchema)//Movies name collection is created

export default Movie;