const router = require('express').Router();
const customerController = require("../controllers/customer-controller.js");

/**
  * @swagger
  * /customer/:
  *  get:
  *   summary: get all customer
  *   tags:
  *   - customer
  *   description: all customer
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
*       $ref: '#/definitions/Customer'
  *   responses:
  *    200:
  *     description: get all customers
  *     content:
  *       application/xml:
  *         schema:
  *           $ref: '#/definitions/Customer'
  *       application/json:
  *         schema:
  *           $ref: '#/definitions/Customer'
  *    500:
  *     description: fail to get all
  */


router.get("/", customerController.findAll);



router.post("/", customerController.create2);

/**
  * @swagger
  * /customer/{customerId}:
  *   get:
  *     tags:
  *     - customer
  *     summary: Find customer by ID
  *     description: Returns a single customer
  *     operationId: findOne
  *     parameters:
  *     - name: customerId
  *       in: path
  *       description: ID of pet to return
  *       required: true
  *       schema:
  *         type: integer
  *         format: int64
  *         example: '1'
  *     responses:
  *       200:
  *         description: successful operation
  *         content:
  *           application/xml:
  *             schema:
  *               $ref: '#/definitions/Customer'
  *           application/json:
  *             schema:
  *               $ref: '#/definitions/Customer'
  *       400:
  *         description: Invalid ID supplied
  *         content: {}
  *       404:
  *         description: Customer not found
  *         content: {}
  *     security:
  *     - api_key: []
  */

router.get("/:customerId", customerController.findOne);

router.put("/:customerId", customerController.update);

router.delete("/:customerId", customerController.delete);

router.delete("/", customerController.deleteAll);

module.exports = router;
