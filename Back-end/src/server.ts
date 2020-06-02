import express from 'express'

const app = express();

app.get('/users', (request , response) =>{
    console.log('vamos voar');

    response.json([
        'erick',
        'diego',
        'teste'
    ])

});

app.listen(3333);