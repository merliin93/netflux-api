const Profil = require('../models/profil');

// Obtenir tous les profils
const getAllProfils = async (req, res) => {
    try {
        const profils = await Profil.findAll();
        res.json(profils);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtenir un profil par ID
const getProfilById = async (req, res) => {
    try {
        const profil = await Profil.findByPk(req.params.id);
        if (profil) {
            res.json(profil);
        } else {
            res.status(404).send('Profil not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Créer un nouveau profil
const createProfil = async (req, res) => {
    try {
        const profil = await Profil.create(req.body);
        res.status(201).json(profil);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Mettre à jour un profil
const updateProfil = async (req, res) => {
    try {
        const profil = await Profil.findByPk(req.params.id);
        if (profil) {
            await profil.update(req.body);
            res.json(profil);
        } else {
            res.status(404).send('Profil not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Supprimer un profil
const deleteProfil = async (req, res) => {
    try {
        const profil = await Profil.findByPk(req.params.id);
        if (profil) {
            await profil.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Profil not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllProfils,
    getProfilById,
    createProfil,
    updateProfil,
    deleteProfil,
};
