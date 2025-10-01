import { Sequelize } from 'sequelize';
import config from './config.json';

const STAGE = "development" // development, test -> siehe config.json
const dbConf = config[STAGE];

if(!dbConf){
    throw new Error(`Keine DB-Konfiguration für Stage "${STAGE}" gefunden.`);
} 

const sequelize = new Sequelize(dbConf.database, dbConf.username, dbConf.password, {
    "host": dbConf.host,  
    "port": dbConf.port,         
    dialect: 'postgres'
})

export async function initializeDbConnection() {
    await sequelize.authenticate();
    await sequelize.sync(); 
}

export async function closeDbConnection() {
    await sequelize.close();
}

export default { sequelize };