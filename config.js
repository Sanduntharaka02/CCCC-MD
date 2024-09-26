const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID = "4fNSFSoA#ijTn6dGYv3LcwnYIixdb2FeA_kwj-0R8NkAGGC5Ee5E",
MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898:qlmYRWrI9brXoDdJ@cluster0.f8a9jgn.mongodb.net/",

//SESSION_ID: process.env.SESSION_ID = "cPNE0bQC#YShImOimxcCB_KXc6NS7eV2b4CqrMGd2TU_Lq2jpoJo",
//MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898:qlmYRWrI9brXoDdJ@cluster0.f8a9jgn.mongodb.net/",
    
//SESSION_ID: process.env.SESSSION_ID = "VtoDgZ6I#XW2NfCKlR43Is3MgHNcLWs7TszoADRFyCheXL1Zd1uY",
//MONGODB: process.env.MONGODB || "mongodb://mongo:remMADEnKcXlyPWwkUoNqqWfyRuqMAoF@junction.proxy.rlwy.net:34095",
};

//vUkFkQaS#fYllxjZEjIFvvGPoLFO-6qA4ZEu3PK7xWrkexo1qikU
