// import {MONGO_URI} from '../config';
import productSeeds from './product-seeds';
import mongooseConnector from '../connectors/mongoose-connector';
import config from '../config'

initSeeds();

async function initSeeds() {
  const mongoConnection = await mongooseConnector(config.database);

  await mongoConnection.dropDatabase();
  try{
    const products= await productSeeds();
    console.log(products);
  }catch (e) {
    console.error(e);
  }finally {
    mongoConnection.close();
  }
}