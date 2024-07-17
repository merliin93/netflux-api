const express = require('express');
const router = express.Router();
const profilController = require('../controllers/ProfilController');

router.get('/profils', profilController.getAllProfils);
router.get('/profils/:id', profilController.getProfilById);
router.post('/profils', profilController.createProfil);
router.put('/profils/:id', profilController.updateProfil);
router.delete('/profils/:id', profilController.deleteProfil);

module.exports = router;
