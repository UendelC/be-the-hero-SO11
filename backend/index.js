const express = require('express');

const app = express();

app.use(express.json());


app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Uendel'
    });
});


app.listen(3333);