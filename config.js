const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

//SESSION_ID: process.env.SESSION_ID = "cPNE0bQC#YShImOimxcCB_KXc6NS7eV2b4CqrMGd2TU_Lq2jpoJo",
//MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898-3:LbomQ0vPu1p7Ux1M@cluster0.1jh1y.mongodb.net/",
    
//SESSION_ID: process.env.SESSSION_ID = "vLJxiaAL#OpgK5yGhCEFXrWAVc2HxtNIn5P8wTUezTSw_vuQ2pDw",
//MONGODB: process.env.MONGODB || "mongodb+srv://tsandun:246810@cluster0.hpsxf.mongodb.net/",

SESSION_ID: process.env.SESSSION_ID = "1mdy2bJJ#B4jRte3KJxanMjeMrw7bJmjYGHbh55K-Cj6BnObaOpY",
MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898-2:0iPJ9OqtWQfBNlYN@cluster0.rnd3h.mongodb.net/",
};

//vUkFkQaS#fYllxjZEjIFvvGPoLFO-6qA4ZEu3PK7xWrkexo1qikU
//c7tA3S4R#KdXRnSlGrtov2zKceQRNgEyzH2Va32z9mSuKMzs3Xvo
