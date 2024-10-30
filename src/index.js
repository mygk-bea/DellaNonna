// import express from 'express';

// import mongoose from "mongoose";
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
mongoose.connect("mongodb+srv://nonnadella27:uJNx5EuM7mAyKpm1@cluster0.o7ilj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// criação do modelo/tabela Receita
const Receita = mongoose.model('Receita', {
    nome: String,
    data: Date,
    modoPreparo: String,
    ingredientes: {
        nomeIngred: String,
        quantidade: Number
    },
    favoritado: Boolean,
    imagem: String
});

// criação do modelo/tabela Usuário
const Usuario = mongoose.model('Usuario', {
    nome: String,
    senha: Number,
    email: String
})

// criação do modelo/tabela Armazém
const Armazem = mongoose.model('Armazem', {
    nomeIngred: [String],
    quantidade: [Number]
})

// criação do modelo/tabela Lista de Compras
const ListaCompras = mongoose.model('Lista_de_compras', {
    nomeIngred: [String],
    quantidade: [Number]
})


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
})

// API para inserts - Usuario
app.post("/cadastro-usuario", async (req, res) => {
    const rec = new Usuario({
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email
    })
})


app.get('/', function (req, res) {
    res.send('Hello word');
})


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