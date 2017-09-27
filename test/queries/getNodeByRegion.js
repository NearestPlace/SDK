import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const TestAppId = '5fHa6zTDBohz4RrsM';
const TestRegionIds = [62422, 62782];

const NearestSDK = new NearestClient({
  apiKey: 'Joq7XlDb1529UHe0',
  app: TestAppId,
});

describe(`NodeByRegion Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query', (done) => {
    const query = NearestSDK.nodes.getByRegionQuery({
      regionId: TestRegionIds,
      fields: ['id'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getNodesByRegion (app:"5fHa6zTDBohz4RrsM",regionId:[62422,62782],limit:10)  { id } }');
    done();
  });

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
