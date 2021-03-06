import chai from 'chai';

import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const apiKey = process.env.NEARESTAPIKEY || '';
const TestAppId = '5fHa6zTDBohz4RrsM';

const NearestSDK = new NearestClient({
  apiKey,
  app: TestAppId,
});

describe('Server Endpoint', () => {
  it('Get the raw Query ("{  getServerInfo   { version } }")', (done) => {
    const query = NearestSDK.server.infoQuery({});
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getServerInfo   { version } }');
    done();
  });

  it('fetch should work and return graphql server info', (done) => {
    NearestSDK.server.info({}, (err, result) => {
      expect(err).to.be.null; // eslint-disable-line no-unused-expressions
      expect(result).to.be.an('object');
      expect(result).to.have.property('version');
      done();
    });
  });
});
