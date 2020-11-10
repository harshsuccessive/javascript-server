import { IConfig } from './IConfig';

const enVars = require ('dotenv').config();

console.log('Inside config', enVars);

const config: IConfig = enVars;

export default Object.freeze(config);