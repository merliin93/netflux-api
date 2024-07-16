const { Content, Episode, Saison } = require('../models');

// Obtenir la liste des contenus
const getContentList = async (req, res) => {
    // try {
    //     const contents = await Content.findAll({
    //         include: [
    //             {
    //                 model: Episode,
    //                 include: [Saison],
    //             }
    //         ]
    //     });
    //     if (contents) {
    //         res.json(contents);
    //     } else {
    //         res.status(404).send('No content found');
    //     }
    // } catch (error) {
    //     res.status(500).send(error.message);
    // }
    res.json({ message: 'Hello World' });
};

// Obtenir le détail d'un contenu par ID
const getDetailContent = async (req, res) => {
    try {
        const content = await Content.findByPk(req.params.id, {
            include: [
                {
                    model: Episode,
                    include: [Saison],
                }
            ]
        });
        if (content) {
            res.json(content);
        } else {
            res.status(404).send('Content not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Créer un nouveau contenu
const createContent = async (req, res) => {
    try {
        const content = await Content.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getContentList,
    getDetailContent,
    createContent,
};
