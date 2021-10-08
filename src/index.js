// import http from 'http';

// const server = http.createServer((req, res) => {
//     res.end('Hello!');
// })

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express!');
})

app.listen(3000, () => {
    console.log('Express app on localhost:3000');
}) ;