import faker from 'faker';
import _ from 'lodash';
import Personal from "../models/personal";

 let roles=['cashier','accountant','shop assistant'];

function init() {
  const promises = [];

  _.times(30, () => {
    const personalPromise = Personal.create({
      email:faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: 1111,
      role:roles[Math.floor( Math.random()*100)%3],
    });
    promises.push(personalPromise);
  });

  return Promise.all(promises);
}

export default init;