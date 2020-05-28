const express = require('express');
const router = express.Router();

let persons = [];

router.get('/person', (request, response) => {
    return response.send(JSON.stringify(persons));
});

router.get('/person/:name', (request, response) => {
    const { name } = request.params;

    const result = persons[persons.indexOf(name)];

    return response.send({
        status: 200,
        message: 'Consulta realizada com sucesso!',
        result: result
    });
});

router.post('/person', (request, response) => {
    const params = request.body.name;

    if (!params) {
        return response.status(400).send({
            status: 400,
            message: 'Body inválido!'
        });
    }

    persons.push(params);

    return response.send({
        status: 200,
        message: `Usuário ${params} cadastrado com sucesso.`
    });
});

router.delete('/person/:name', (request, response) => {
    const { name } = request.params;

    persons.splice(persons.indexOf(name), 1);

    console.log(persons);

    return response.send({
        status: 200,
        message: `Usuário ${name} deletado com sucesso!`
    });
});

module.exports = router
