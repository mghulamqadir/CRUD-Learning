import express from 'express';
import morgan from 'morgan';

import moviesRouter from "./Routes/movies.Routes.js"

const app = express();

const logger = function (req, res, next) {
    console.log("Custom Middleware called");
    next();
}

app.use(express.json())
app.use(logger)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))//it lock the request for user
}

app.use(express.static('./public/'))//

app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next()
})

app.use('/api/v1/movies', moviesRouter);

export default app;
