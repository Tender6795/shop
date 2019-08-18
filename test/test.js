let supertest = require("supertest");
let should = require("should");
let server = supertest.agent("http://localhost:4000");
import Product from '../models/product';
import pick from 'lodash/pick';




describe("Test",function () {

//   it('Create product',async ()=>{
//     const productData={
//       name:"test name",
//       price:100
//     };
//
// const product =await Product.create(productData);
//
// expect(pick(product,Object.keys(productData))).toEqual(productData)
//
//
//   })
  it("test", (done)=> {
    done();
  });
});



