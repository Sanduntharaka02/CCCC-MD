const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID = "tucymCSB#GTkcfg8DmVxL0QncuyYM38uQNRmUVrAylfjKGxbYKco",
MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898:qlmYRWrI9brXoDdJ@cluster0.f8a9jgn.mongodb.net/",
};
