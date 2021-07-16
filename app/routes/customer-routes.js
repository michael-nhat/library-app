const router = require('express').Router();
const customerController = require("../controllers/customer-controller.js");


/**
  * @swagger
  * /cat/:
  *  get:
  *   summary: get all cats
  *   tags:
  *   - Cat
  *   description: all cats
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Stock'
  *   responses:
  *    200:
  *     description: get all cats succesfully
  *    500:
  *     description: fail to get all cats
  */
router.get("/", customerController.findAll);
router.post("/", customerController.create);

router.get("/:customerId", customerController.findOne);

router.put("/:customerId", customerController.update);

router.delete("/:customerId", customerController.delete);

router.delete("/", customerController.deleteAll);

module.exports = router;
