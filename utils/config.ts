import dotenv from 'dotenv';
import path from 'path';
import log from './log';
import exit from './errorHandling/exit';

let config = process.env;

try {
  if (!config.NODE_ENV) exit({ label: 'Config', message: 'Environment variable NODE_ENV is not set!' });

  const NODE_ENV = config.NODE_ENV;
  dotenv.config({ path: path.resolve(__dirname, `../config/${NODE_ENV}.env`) });

  const properties = ['APP_PORT'];

  properties.forEach((property:string) => {
    if(!Object.prototype.hasOwnProperty.call(process.env, property))
      return exit({ label: 'Config', message: `Environment variable ${property} is not set!` })
  });

  config = process.env;

  log.init({ label: 'Config', message: 'Config successfully initialized!' });

} catch (ex) {
  exit({ label: 'Config', message: `${ex}` });
}

export default config;
