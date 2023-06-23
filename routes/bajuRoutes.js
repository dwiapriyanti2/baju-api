// bajuRoutes.js

const express = require('express');
const router = express.Router();
const bajuController = require('../controllers/bajuController');

// Rute-rute CRUD untuk koleksi "baju"
router.get('/', bajuController.getAllBajus);
router.post('/', bajuController.createBaju);
router.get('/:id', bajuController.getBajuById);
router.put('/:id', bajuController.updateBaju);
router.delete('/:id', bajuController.deleteBaju);

module.exports = router;
