'use strict';

const server = require('../server');

describe('Server test', ()=>{
  it('uses lower case', ()=>{
    let str = 'CASE';
    let result = str.toLowerCase();
    expect(result).toEqual('case');
  });
});

//need to learn spyon for teting purposes
// not sure how to finish tests, will revisist when time permits -recognize need for tests