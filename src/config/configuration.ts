import { IConfig } from './IConfig';
import { config } from 'dotenv';

config();
const envVars = process.env;
const configuration = Object.freeze({
  KEY:  'qwertyuiopasdfghjklzxcvbnm123456',
  port : envVars.PORT,
  nodeEnv : envVars.NODE_ENV,
  mongoURL: envVars.MONGO_URL

});
export default configuration;