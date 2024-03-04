import express from "express";
import { getAMovie, getAllMovies, updateMovie, deleteMovie, createMovie, checkId, validationBody } from "../Controllers/movies.ControllerPrevious.js"

const router = express.Router();

router.param('id', checkId)
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
    .post(validationBody, createMovie)
//above line shows the chaining the middleware and is execution according to order which is mentioned 
//if we have body with post request. If we post request with empty body then will get empty response so that this is not the behaviour which we want for overcoming it we need to some validations. 


router.route('/:id')
    .get(getAMovie)//all these are middleware functions
    .patch(updateMovie)//all these are middleware functions
    .delete(deleteMovie)//all these are middleware functions
//route handler is middleware function. Router handler in middleware function. 

export default router;
