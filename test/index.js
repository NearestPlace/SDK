import chai from 'chai';
import { NearestClient } from '../lib/index';

const expect = chai.expect;

const TestAppId = '5fHa6zTDBohz4RrsM';

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
    const createInstance = () => new NearestClient();
    expect(createInstance).to.throw();
    done();
  });
  it('The SDK init should work correctly', (done) => {
    NearestSDK = new NearestClient({
      publicKey: '1-2-3',
      app: TestAppId,
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

describe('Server Endpoint', () => {
  it('fetch should work and return graphql server info', (done) => {
    NearestSDK.server.info({}, (err, result) => {
      expect(err).to.be.null; // eslint-disable-line no-unused-expressions
      expect(result).to.be.an('object');
      expect(result).to.have.property('version');
      done();
    });
  });
});

describe('Node Endpoints', () => {
  it('fetch a nodeid and return its data', (done) => {
    NearestSDK.nodes.get({
      id: 'LqYXFQCu95k6NvwRy',
      // app: TestAppId,
    }, (err, result) => {
      if (err) {
        console.log('Problem:', err); // eslint-disable-line no-console
      }
      expect(err).to.be.null; // eslint-disable-line no-unused-expressions
      expect(result).to.be.an('object');
      expect(result).to.have.property('id');
      expect(result.id).to.be.equal('LqYXFQCu95k6NvwRy');
      done();
    });
  });
});
