import Movie from '../Models/movie.model.js'




const getAllMovies = (req, res) => {
    // const aMovie = new Movie({});
    // aMovie.save();
    // alternative way

    // Movie.create({})
    // .then(doc =>{
    //     console.log(doc);
    // })


    //the save method and create method returns a promise. is promise resolved then result shown and if it is rejected the shown an error.  
}
const getAMovie = (req, res) => {

}
const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                // movie:movie
                //in ES6 if the variable name and value name is same then we can use single value
                movie
            }
        })
    } catch (error) {

        res.status(400).json({
            status: 'fail',
            message: error.message
        })
        console.log(error);
    }
}

const updateMovie = (req, res) => {

}

const deleteMovie = (req, res) => {

}

export { getAMovie, getAllMovies, updateMovie, deleteMovie, createMovie }