import chai from 'chai';

import './queries/getApp';
import './queries/getNode';
import './queries/getNearest';

import { NearestClient } from '../lib/index';

const expect = chai.expect;

const TestAppId = '5fHa6zTDBohz4RrsM';
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
    const NearestSDK = new NearestClient({
      apiKey: 'Joq7XlDb1529UHe0',
      app: TestAppId,
    });
    done();
  });
});
