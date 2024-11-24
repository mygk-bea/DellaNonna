// conn.js
const mongoose = require('mongoose');

const conn = async () => {
    try {
        const url = "mongodb+srv://nonnadella230:8MWYMk9SXwLiAN4k@cluster0.sf5fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Certifique-se de que a URL de conexão está correta.

        await mongoose.connect(url, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000
        });

        console.log('DB conectado com sucesso.');
    } catch (err) {
        console.error('Erro:', err);
    }
};

module.exports = conn;
