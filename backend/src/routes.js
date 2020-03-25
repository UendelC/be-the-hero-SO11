const express = require('express');

const routes = express.Router();


routes.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Uendel'
    });
});

module.exports = routes;