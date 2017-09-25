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
  it('The SDK init should throw an error because of missing apiKey', (done) => {
    const createInstance = () => new NearestClient();
    expect(createInstance).to.throw();
    done();
  });
  it('The SDK init should work correctly', (done) => {
    NearestSDK = new NearestClient({
      apiKey: '1-2-3',
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
  it('fetch an app and return its data via Promise', (done) => {
    NearestSDK.app.get({
      fields: ['id'],
    })
      .then((data) => {
        // console.log(data);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('fetch a nodeid and return its data via Promise', (done) => {
    NearestSDK.nodes.get({
      id: ['LqYXFQCu95k6NvwRy'],
      app: TestAppId,
      fields: ['id', 'status'],
    })
      .then((data) => {
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('fetch a nodeid and return its data via Callback', (done) => {
    NearestSDK.nodes.get({
      id: ['LqYXFQCu95k6NvwRy'],
      app: TestAppId,
    }, (err, result) => {
      if (err) {
        console.log('Problem:', err);
      }
      expect(err).to.be.null; // eslint-disable-line no-unused-expressions
      expect(result).to.be.an('array')
        .and.to.have.lengthOf(1);
      expect(result[0]).to.have.property('id')
        .and.to.be.equal('LqYXFQCu95k6NvwRy');
      done();
    });
  });

  it('Get nodes by region and return its data via Promise', (done) => {
    NearestSDK.nodes.getByRegion({
      app: TestAppId,
      regionId: [62422],
      fields: ['id', 'status'],
    })
      .then((data) => {
        // console.log(data);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get nodes by bound and return its data via Promise', (done) => {
    NearestSDK.nodes.getByBound({
      app: TestAppId,
      bound: [
        [13.0883500240376, 52.3382599827022],
        [13.0883500240376, 52.6755099903978],
        [13.7611599647432, 52.6755099903978],
        [13.7611599647432, 52.3382599827022],
        [13.0883500240376, 52.3382599827022],
      ],
      fields: ['id', 'status'],
    })
      .then((data) => {
        // console.log(data);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get nearest nodes and return data via Promise', (done) => {
    NearestSDK.nodes.nearest({
      app: TestAppId,
      lat: 52.49367,
      lng: 13.43609,
      radius: 10000,
      fields: ['id', 'status'],
    })
      .then((result) => {
        expect(result).to.be.an('array')
          .and.to.have.lengthOf(10);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get a cluster for a specific region (62422) via Promise', (done) => {
    NearestSDK.nodes.cluster({
      app: TestAppId,
      fields: ['cluster'],
      regionId: [62422],
    })
      .then((result) => {
        expect(result).to.be.an('array');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });
});
