// celanaRoutes.js

const express = require('express');
const router = express.Router();
const celanaController = require('../controllers/celanaController');

// Rute-rute CRUD untuk koleksi "celana"
router.get('/', celanaController.getAllCelanas);
router.post('/', celanaController.createCelana);
router.get('/:id', celanaController.getCelanaById);
router.put('/:id', celanaController.updateCelana);
router.delete('/:id', celanaController.deleteCelana);

module.exports = router;
