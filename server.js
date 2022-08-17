// const fs = require('fs');
const data = require('./users.json')
const fastify = require('fastify')({ logger: false });

// fastify.register(require('fastify-cors'), {});

fastify.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    if (req.query.term) {
        const result = data.filter((elem) => elem.name.toLowerCase().search(req.query.term.toLowerCase()) !== -1);
        res.send(result);
    }
    else {
        res.send(data);
    }
});

const start = async () => {
    try {
        await fastify.listen(3030, () => console.log('серевер работает...'))
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
