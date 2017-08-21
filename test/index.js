import expect from 'expect';

import SDK from '../lib/index';

let NearestSDK;
/**
  Tests
  ----------
  ----------

  Init:
  - should init correctly
  - should init with missing keys and throw error

  Fetch:
  - should return promise
  - should call callback
  - should throw error because of wrong endpoint

  Queries:
  - should call query without problem
  - should call wrong query and throw error
  - should call query and return correct value
  - should call query with wrong version and throw error
  - should call query with wrong keys and throw error

*/
describe('Init the SDK', () => {
  it('The SDK init should throw an error because of missing publicKey', (done) => {
    const createInstance = () => new SDK();
    expect(createInstance).toThrowAnyError();
    done();
  });
  it('The SDK init should work correctly', (done) => {
    NearestSDK = new SDK({
      publicKey: '1-2-3',
    });
    done();
  });
});

describe('Test FETCH functionality', () => {
  it('fetch should return a promise', (done) => {
    const myPromise = NearestSDK.nodes.get({});
    myPromise.then(() => {}, () => {}).catch();
    expect(myPromise instanceof Promise).toBeTruthy();
    done();
  });
  it('fetch should return return a result via cb', (done) => {
    NearestSDK.nodes.get({}, () => {
      done();
    });
  });
});
