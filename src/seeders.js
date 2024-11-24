const conn = require('./conn');
const { Receita, Usuario } = require('./model');
const { faker } = require('@faker-js/faker');

const seedDatabase = async () => {
    await conn(); 

    const users = [];
    for (let i = 0; i < 3; i++) {
        const user = new Usuario({
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            senha: faker.internet.password(),
        });
        users.push(user);
    }

    await Usuario.insertMany(users);
    console.log('Usuários seedados com sucesso!');

    const usuarios = await Usuario.find();
    const randomUser = usuarios[Math.floor(Math.random() * usuarios.length)];

    const receitas = [];
    for (let i = 0; i < 5; i++) {
        const receita = new Receita({
            nome_user: randomUser.nome,
            nome: faker.food.dish(),  
            data: faker.date.past(), 
            modoPreparo: faker.food.description(), 
            ingredientes: [
                {
                    nomeIngred: faker.food.ingredient(), 
                    quantidade: faker.number.int({ min: 1, max: 10 }) 
                },
                {
                    nomeIngred: faker.food.ingredient(),
                    quantidade: faker.number.int({ min: 1, max: 10 })
                },
                {
                    nomeIngred: faker.food.ingredient(), 
                    quantidade: faker.number.int({ min: 1, max: 10 }) 
                },
                {
                    nomeIngred: faker.food.ingredient(),
                    quantidade: faker.number.int({ min: 1, max: 10 })
                },
            ],
            favoritado: faker.datatype.boolean(), 
        });
        receitas.push(receita);
    }
    await Receita.insertMany(receitas);
    console.log('Receitas seedadas com sucesso!');
};

seedDatabase();