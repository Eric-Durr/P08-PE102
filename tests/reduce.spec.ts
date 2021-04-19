import 'mocha';
import {expect} from 'chai';
import {trueFunction} from '../src/reduce';


describe("Testing array reduce method template implementation", ()=>{
  it ("Empty test", ()=>{
    expect(trueFunction()).to.be.true;
  });
});