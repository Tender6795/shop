
import mongooseConnector from '../connectors/mongoose-connector';
import config from '../config'
import productSeeds from './product-seeds';
import personalSeeds from './personal-seeds';

initSeeds();

async function initSeeds() {
  const mongoConnection = await mongooseConnector(config.database);

  await mongoConnection.dropDatabase();
  try{
    const products= await productSeeds();
    const personal=await personalSeeds();
   console.log(personal);
  }catch (e) {
    console.error(e);
  }finally {
    mongoConnection.close();
  }
}