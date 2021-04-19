import 'mocha';
import {expect} from 'chai';
import {AddReduce, SubReduce, ProdReduce, DivReduce} from '../src/reduce';


describe("Testing array reduce method template implementation", ()=>{
  it ("AddReduce specification test - acc base 0", ()=>{
    expect(new AddReduce([1,2,3,4]).operate()).to.be.eq(10);
  });
  it ("AddReduce specification test - acc base 5", ()=>{
    expect(new AddReduce([1,2,3,4], 5).operate()).to.be.eq(15);
  });
  it ("SubReduce specification test - acc base 0", ()=>{
    expect(new SubReduce([1,2,3,4]).operate()).to.be.eq(-10);
  });
  it ("SubReduce specification test - acc base 5", ()=>{
    expect(new SubReduce([1,2,3,4], 5).operate()).to.be.eq(-5);
  });
  it ("ProdReduce specification test - acc base 0", ()=>{
    expect(new ProdReduce([1,2,3,4], 0).operate()).to.be.eq(0);
  });
  it ("ProdReduce specification test ", ()=>{
    expect(new ProdReduce([2,2,3,4]).operate()).to.be.eq(48);
  });
  it ("DivReduce specification test - acc base 0", ()=>{
    expect(new DivReduce([2,2,3,4], 0).operate()).to.be.eq(0);
  });
  it ("DivReduce specification test ", ()=>{
    expect(new DivReduce([10]).operate()).to.be.eq(1);
  });
});