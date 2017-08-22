import chai from 'chai';
import SDK from '../lib/index';

const expect = chai.expect;

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
    expect(createInstance).to.throw();
    done();
  });
  it('The SDK init should work correctly', (done) => {
    NearestSDK = new SDK({
      publicKey: '1-2-3',
    });
    done();
  });
});

describe('Callback options of SDK Call', () => {
  it('fetch should return a promise', (done) => {
    const myPromise = NearestSDK.nodes.get({});
    myPromise.then(() => {}, () => {}).catch();
    expect(myPromise).to.be.an.instanceof(Promise);
    done();
  });
  it('fetch should return return a result via cb', (done) => {
    NearestSDK.nodes.get({}, () => {
      done();
    });
  });
});

describe('Endpoint Actions', () => {
  it('fetch should work and return graphql server version', (done) => {
    NearestSDK.server.version({}, (err, result) => {
      expect(err).to.be.null; // eslint-disable-line no-unused-expressions
      expect(result).to.have.property('version');
      done();
    });
  });
});
