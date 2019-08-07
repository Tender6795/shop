import faker from 'faker';
import _ from 'lodash';
import Product from '../models/product';

function init() {
  const promises = [];

  _.times(10, () => {
    const productPromise = Product.create({
      name: `Утюг-${faker.lorem.word(7, 35)}-${Math.floor( Math.random()*100)}`,
      price: Math.floor( Math.random()*100),
    });
    promises.push(productPromise);
  });
  _.times(10, () => {
    const productPromise = Product.create({
      name: `Чайник-${faker.lorem.word(7, 35)}-${Math.floor( Math.random()*100)}`,
      price:Math.floor( Math.random()*100),
    });
    promises.push(productPromise);
  });
  return Promise.all(promises);
}

export default init;