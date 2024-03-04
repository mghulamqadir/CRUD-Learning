import express from "express";
import { getAMovie, getAllMovies, updateMovie, deleteMovie, createMovie } from "../Controllers/movies.Controller.js"

const router = express.Router();

//param Middleware special middle which is only runs for certain routes, now here '/', and '/:id', here Id is param middleware which present in URL.

// GET Method
// app.get('/api/v1/movies', getAllMovies)
// app.get('/api/v1/movies/:id', getAMovie)


// POST request 
// app.post('/api/v1/movies', createMovie)


// Patch Element
// app.patch('/api/v1/movies/:id', updateMovie)


// Delete 
// app.delete('/api/v1/movies/:id', deleteMovie)

// alternative way

router.route('/')
    .get(getAllMovies)
    .post(createMovie)


router.route('/:id')
    .get(getAMovie)
    .patch(updateMovie)
    .delete(deleteMovie)

//route handler is middleware function. Router handler in middleware function. 

export default router;
