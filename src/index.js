// import express from 'express';

import mongoose from "mongoose";
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello word');
})

mongoose.connect("mongodb+srv://nonnadella27:al37JAvPl6kKupYg@cluster0.o7ilj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("Deu certo, db conectado")).catch(() => console.log("Deu ruim :( db não conectado"))

app.listen(3000); 