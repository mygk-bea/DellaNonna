const mongoose = require('mongoose')

// criação do modelo/tabela Receita
const Receita = mongoose.model('Receita', {
    nome_user: String,
    nome: String,
    data: Date,
    modoPreparo: String,
    ingredientes: [{
        nomeIngred: String,
        quantidade: Number
    }],
    favoritado: Boolean,
    imagem: String
});

// criação do modelo/tabela Usuário
const Usuario = mongoose.model('Usuario', {
    nome: {
        type: String,
        required: true,
        unique: true
    },
    senha: String,
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

module.exports = { Receita, Usuario, Armazem, ListaCompras };