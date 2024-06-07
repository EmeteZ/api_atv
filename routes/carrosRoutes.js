const express = require('express');
const router = express.Router();
const carros = require('../models/carros');



// Rota para obter todos os carross 

router.get('/', async (req, res) => {
    try {
        const carros= await carros.find();
        res.json(carros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Rota para obter um carros por ID 

router.get('/:id', getcarros, (req, res) => {
    res.json(res.carros);
});



// Rota para criar um novo carros 

router.post('/', async (req, res) => {
    const carros = new carros({
        nome: req.body.nome,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        foto: req.body.foto,
    });

    try {
        const newcarros = await carros.save();
carroscarros
        res.status(201).json(newcarros);
carros
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// Rota para atualizar um carros por ID 
carros
router.put('/:id', getcarros, async (req, res) => {
carros
    if (req.body.nome != null) {
        res.carros.nome = req.body.nome;
carros
    }

    if (req.body.modelo != null) {
        res.carros.modelo = req.body.modelo;
carros
    }

    if (req.body.marca != null) {
        res.carros.marca = req.body.marca;
carros
    }

    if (req.body.ano != null) {
        res.carros.ano = req.body.ano;
carros
    }

    if (req.body.foto != null) {
        res.carros.foto = req.body.foto;
carros
    }

    try {
        const updatedcarros = await res.carros.save();
carroscarros
        res.json(updatedcarros);
carros
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// Rota para excluir um carros por ID 
carros
router.delete('/:id', getcarros, async (req, res) => {
carros
    try {
        await res.carros.deleteOne();
carros
        res.json({ message: 'carros excluído com sucesso!' });
carros
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


async function getcarros(req, res, next) {
carros
    try {
        const carros = await carros.findById(req.params.id);
carroscarros
        if (carros == null) {
carros
            return res.status(404).json({ message: 'carros não encontrado' });
carros
        }
        res.carros = carros;
carroscarros
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;