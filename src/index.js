import express from 'express';

//import {respond} from "./responder.js";

const app = express();

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: './src'})
})

app.listen(3000, () => {
    console.log('Express app on localhost:3000');
}) ;