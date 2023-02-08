require('dotenv').config()
const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST,DB_DATABASE
  } = process.env;

const connectionString= `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Project_Login`


const sequelize = new Sequelize(connectionString, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);


const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const {Users,Note} = sequelize.models


Users.hasMany(Note,{as:'posts',foreignKey:'authorID'})
Note.belongsTo(Users)




module.exports = {

  ...sequelize.models, 
  conn: sequelize,     
};
