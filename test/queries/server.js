import chai from 'chai';

import { NearestClient } from '../../lib/index';

const expect = chai.expect;

const TestAppId = '5fHa6zTDBohz4RrsM';

const NearestSDK = new NearestClient({
  apiKey: '1-2-3',
  app: TestAppId,
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
