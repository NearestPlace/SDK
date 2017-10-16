import chai from 'chai';

import './queries/getApp';
import './queries/getNode';
import './queries/getNearest';

import { NearestClient } from '../lib/index';

const { expect } = chai;
const apiKey = process.env.NEARESTAPIKEY || '';
const TestAppId = '5fHa6zTDBohz4RrsM';

describe('Init the SDK', () => {
  it('The SDK init should throw an error because of missing apiKey', (done) => {
    const createInstance = () => new NearestClient();
    expect(createInstance).to.throw();
    done();
  });
  it('The SDK init should work correctly', (done) => {
    const NearestSDK = new NearestClient({
      apiKey,
      app: TestAppId,
    });
    done();
  });
});
