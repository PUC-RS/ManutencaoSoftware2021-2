const express = require('express');
const router = express.Router();
const itinerarioService = require('../../business/itinerario/itinerarioService');

/**
 * @swagger
 *
 * definitions:
 *  Itinerario:
 *   type: object
 *   properties:
 *    tempoCaminhada:
 *     type: number
 *     format: float
 *    tempoCarro:
 *     type: number
 *     format: float
 *    tempoBicicleta:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    instituicoes:
 *     type: array
 *     items:
 *      $ref: '#/definitions/InstituicaoItinerarioCompleta'
 *
 *  InstituicaoItinerarioCompleta:
 *   type: object
 *   properties:
 *    id:
 *     type: number
 *    descricao:
 *     type: string
 *    endereco:
 *     type: string
 *    latitude:
 *     type: number
 *     format: float
 *    longitude:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    observacoes:
 *     type: string
 *    telefone:
 *     type: string
 *     pattern: '^[(]\d{2}[)]\d{8,9}$'
 *    tempoVisita:
 *     type: integer
 *
 *  InstituicaoRoteiro:
 *   type: object
 *   properties:
 *    id:
 *     type: number
 *
 *  ItinerarioAtualizacao:
 *   type: object
 *   properties:
 *    tempoCaminhada:
 *     type: number
 *     format: float
 *    tempoCarro:
 *     type: number
 *     format: float
 *    tempoBicicleta:
 *     type: number
 *     format: float
 *    nome:
 *     type: string
 *    instituicoes:
 *     type: array
 *     items:
 *      $ref: '#/definitions/InstituicaoItinerarioCompleta'
 *
 */

/**
 * @swagger
 * tags:
 *   - name: itinerario
 *     description: Tudo sobre Itinerario
 */

/**
 * @swagger
 *
 * /api/v1/itinerario:
 *   post:
 *    tags: [itinerario]
 *    description: Add itinerario
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/Itinerario'
 *    responses:
 *     201:
 *       description: Created
 *       content:
 *        application/json:
 *          schema:
 *           $ref: '#/definitions/Itinerario'
 *
 */
router.post('/', async function (req, res) {
    itinerarioService.salvarItinerario(req.body)
        .then(itinerario => {
            res.status(201);
            res.json(itinerario);
        }).catch(err => {
        res.status(err.statusCode).send(err);
    });
});

/**
 * @swagger
 *
 * /api/v1/itinerario:
 *   get:
 *     tags: [itinerario]
 *     description: Get Itinerarios
 *     responses:
 *       200:
 *         description: Application Itinerario
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/Itinerario'
 *
 */
router.get('/', async (req, res) => {
    await itinerarioService.buscarItinerarios()
        .then((result) => {
            res.set('X-Total-Count', result.length);
            res.header('Access-Control-Expose-Headers', 'X-Total-Count');
            res.status(200);
            res.json(result);
        })
        .catch(e => res.status(e.statusCode).send(e));
});

/**
 * @swagger
 *
 * /api/v1/itinerario/{id}:
 *   delete:
 *     tags: [itinerario]
 *     description: Deleta Itinerario dado determinado Id
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       required: true
 *     responses:
 *       204:
 *         description: Application Itinerario
 *
 */
router.delete('/:id', async (req, res) => {
    itinerarioService.deletar(req.params.id)
        .then(result => {
            res.status(204);
            res.json(`itinerario ${result} deletado`);
        })
        .catch(e => {
            const status = e.statusCode || 500;
            res.status(status);
            res.json(e);
        });
});

/**
 * @swagger
 *
 * /api/v1/itinerario/{id}:
 *   put:
 *    tags: [itinerario]
 *    description: Atualiza itinerario
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       required: true
 *    requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/definitions/ItinerarioAtualizacao'
 *    responses:
 *     200:
 *       description: Ok
 */
router.put('/:id', async (req, res) => {
    itinerarioService.atualizarItinerario(req.params.id, req.body)
        .then((resultado) => {
            res.status(200).send();
            res.json(resultado);
        }).catch(err => {
        res.status(err.statusCode).send(err);
    });
});

module.exports = router;