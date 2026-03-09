'use strict'

const db = {
    1: { brand: 'Veloretti', color: 'green' },
    2: { brand: 'Batavus', color: 'yellow' }
}

module.exports = async (fastify, opts) => {
    fastify.get('/:id/details', (request, reply) => {
        const { id } = request.params;

        const bicycle = db[id];

        if (!bicycle) {
            const errMessage = 'not found';

            if (errMessage === 'not found') reply.notFound();
            else reply.send('another error');
        } else reply.send(bicycle);
        //await reply for callback handling
    })
}
