import expect from 'expect';

import SDK from '../lib/index';

const NearestSDK = new SDK({});

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
