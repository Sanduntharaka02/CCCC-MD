const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID = "VtoDgZ6I#XW2NfCKlR43Is3MgHNcLWs7TszoADRFyCheXL1Zd1uY",
MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898:qlmYRWrI9brXoDdJ@cluster0.f8a9jgn.mongodb.net/",

//SESSION_ID: process.env.SESSSION_ID = "UDkHybZZ#da9UbJsCodHfl_H_G_HW7yIPpczaFTw7cJthwG46xBQ",
//MONGODB: process.env.MONGODB || "mongodb://mongo:remMADEnKcXlyPWwkUoNqqWfyRuqMAoF@junction.proxy.rlwy.net:34095",
};
