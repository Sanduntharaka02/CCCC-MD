const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//SESSION_ID: process.env.SESSION_ID = "PbZ1lagZ#B08Hq5TTxUPS34XYHxDYkE5qFcbgrxjR4an1S3mn_nk",
//MONGODB: process.env.MONGODB || "mongodb+srv://mrck-md-6898:qlmYRWrI9brXoDdJ@cluster0.f8a9jgn.mongodb.net/",

SESSION_ID: process.env.SESSSION_ID = "zN8CnD5R#Kd7VjzvE2qpNKDDvChuF1guaVeeqiwPB0_uaYACxPZo",
MONGODB: process.env.MONGODB || "mongodb://mongo:remMADEnKcXlyPWwkUoNqqWfyRuqMAoF@junction.proxy.rlwy.net:34095",
};
