import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const TestAppId = '5fHa6zTDBohz4RrsM';
const TestRegionIds = [62422, 62782];

const NearestSDK = new NearestClient({
  apiKey: '1-2-3',
  app: TestAppId,
});

describe(`NodeByRegion Query (AppId: ${TestAppId})`, () => {
  it(`Get Node by regions (${TestRegionIds}) and return (Promise) its data.`, (done) => {
    NearestSDK.nodes.getByRegion({
      regionId: TestRegionIds,
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.a('array');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it(`Get Node by regions (${TestRegionIds}) and return (Callback) its data.`, (done) => {
    NearestSDK.nodes.getByRegion({
      regionId: TestRegionIds,
      fields: ['id'],
    }, (error, result) => {
      if (error) console.log('Problem', error);
      expect(result).to.be.a('array');
      done();
    });
  });
});
