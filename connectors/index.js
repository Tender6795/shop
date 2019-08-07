// import {MONGO_URI} from '../config';
import config from '../config';
import mongooseConnector from './mongoose-connector';
import server from '../server';

async function connectorsInit() {
  try {
    await mongooseConnector(config.database);
  } catch (e) {
    server.close();
    console.error(e);
  }
}

export {
  mongooseConnector,
};

export default connectorsInit;