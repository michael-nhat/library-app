const router = require('express').Router();
const tutorialController = require('../controllers/tutorial-controller.js');

router.get('/', tutorialController.findAll);

router.post('/', tutorialController.create);

router.get('/published', tutorialController.findAllPublished);

router.get('/:id', tutorialController.findOne);

router.put('/:id', tutorialController.update);

router.delete('/:id', tutorialController.delete);

router.delete('/', tutorialController.deleteAll);

module.exports = router;
