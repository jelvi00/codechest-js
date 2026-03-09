'use strict'

const db = {
    1: { brand: 'BMW', color: 'black' },
    2: { brand: 'Audi', color: 'red' }
}

module.exports = async (fastify, opts) => {

    const { notFound } = fastify.httpErrors

    fastify.get('/:id/details', async (request, reply) => {
        const { id } = request.params;

        const car = db[id];

        try {
            return await new Promise((resolve, reject) => resolve(car))
        } catch (err) {
            if (err.message === 'not found') throw notFound()
            throw err
        }
    })
}
