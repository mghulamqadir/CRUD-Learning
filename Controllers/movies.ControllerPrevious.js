import fs from "fs"

import Movie from '../Models/movie.model.js'

let movies = JSON.parse(fs.readFileSync('./Data/movies.json'))

const checkId = (req, res, next, value) => {
    console.log(`Movie ID is ${value}`);

    let movie = movies.find((ele) => ele.id === +value)

    if (!movie) {
        return res.status(404).json({
            status: "Failed",
            message: `Movie with ID ${value} is not Found`
        })
    }
    next()
}

const validationBody = (req, res, next) => {
    if (!req.body.name || !req.body.releaseYear || !req.body.duration) {
        return res.status(400).json({
            status: 'fail',
            message: "Not a Valid movie Data"
        })
    }
    next()
}
const getAllMovies = (req, res) => {
    res.status(200).json({
        status: "success",
        requestedAt: req.requestedAt,
        count: movies.length,
        data: {
            movies: movies
        }
    })
}
const getAMovie = (req, res) => {
    console.log(req.params)
    const id = +req.params.id

    let movie = movies.find((ele) => ele.id === id)

    // if (!movie) {
    //     return res.status(404).json({
    //         status: "Failed",
    //         message: `Movie with ID ${id} is not Found`
    //     })
    // }
    res.status(200).json({
        status: "success",
        data: {
            movie: movie
        }
    })
}
const createMovie = (req, res) => {

    console.log(req.body);
    const newId = movies[movies.length - 1].id + 1
    const newMovie = Object.assign({ id: newId }, req.body)

    movies.push(newMovie)

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        })
    })
}

const updateMovie = (req, res) => {
    let id = +req.params.id
    let movieToUpdate = movies.find(ele => ele.id === id)

    // if (!movieToUpdate) {
    //     res.status(404).json({
    //         status: "Failed",
    //         message: `No movie object with ID ${id} is found`
    //     })
    // }
    let index = movies.indexOf(movieToUpdate)

    Object.assign(movieToUpdate, req.body)

    movies[index] = movieToUpdate;

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), (err) => {

        res.status(201).json({
            status: "success",
            data: {
                movie: movieToUpdate
            }
        })
    })
}

const deleteMovie = (req, res) => {
    const id = +req.params.id
    const movieToDelete = movies.find(ele => ele.id === id)
    const index = movies.indexOf(movieToDelete)

    // if (!movieToDelete) {
    //     res.status(404).json({
    //         status: "Failed",
    //         message: `No movie object with ID ${id} is found`
    //     })
    // }

    movies.splice(index, 1)
    fs.writeFile('./Data/movies.json', JSON.stringify(movies), (err) => {

        res.status(204).json({
            status: "success",
            data: {
                movie: null
            }
        })
    })
}

export { getAMovie, getAllMovies, updateMovie, deleteMovie, createMovie, checkId, validationBody }