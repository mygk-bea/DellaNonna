// import express from 'express';
// import mongoose from "mongoose";
// import bcrypt from 'bcrypt';
// import cors from 'cors';

const { Receita, Usuario, Armazem, ListaCompras } = require('./model')
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const conn = require('./conn')

app.use(express.json());
app.use(cors());

conn().then(() => {
// API para inserts - Receitas
app.post("/cadastro-receita", async (req, res) => {
    const rec = new Receita({
        nome: req.body.nome,
        data: req.body.data,
        modoPreparo: req.body.modoPreparo,
        ingredientes: {
            nomeIngred: req.body.nomeIngred,
            quantidade: req.body.quantidade
        },
        favoritado: req.body.favoritado,
        imagem: req.body.urlImgaem
    })

    await rec.save()
    res.send(rec)
})

// API para inserts - Usuario
app.post("/cadastro-usuario", async (req, res) => {
    try {
        const user = new Usuario({
            nome: req.body.name,
            senha: req.body.password,
            email: req.body.email
        })
        await user.save()
        res.send(user)

    } catch (error) {
        console.error(error);
        if (error.code === 11000) {
            res.status(500).json({ error: 'Já existe um usuário com este nome!' });
        } else {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    }
})


// API login Usuário
app.post("/login-usuario", async (req, res) => {
    const { email, password } = req.body;

    try {
        const credenciais = await Usuario.findOne({ email: email });

        if (!credenciais) {
            return res.status(400).json({ error: 'Usuário não encontrado!' });
        }

        if(credenciais.senha == password){
            console.log('Senha achada!');
            return res.status(200).json({
                message: 'Login bem-sucedido',
                user: {
                    _id: credenciais._id,
                    name: credenciais.nome,
                    email: credenciais.email,
                    senha: credenciais.senha,
                },
            });
        }

    } catch (error) {
        console.error('Erro no servidor:', error.message || error);
        return res.status(500).json({ error: 'Erro no servidor', details: error.message || error });
    }
});

app.listen(port, () => {
    console.log('App running')
});

// API para listar todas as receitas
// app.get("/api/receitas", async (req, res) => {
//     try {
//         const receitas = await Receita.find(); // Busca todas as receitas no banco
//         res.status(200).send(receitas); // Retorna as receitas
//     } catch (error) {
//         res.status(500).send({ error: "Erro ao buscar receitas", detalhes: error });
//     }
// });

}).catch(err => {
    console.error('Erro:', err);
});