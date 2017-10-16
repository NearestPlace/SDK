import chai from 'chai';
import { NearestClient } from '../../../lib/index';

const { expect } = chai;
const TestAppId = '5fHa6zTDBohz4RrsM';
const apiKey = process.env.NEARESTAPIKEY || '';

const NearestSDK = new NearestClient({
  apiKey,
  app: TestAppId,
});

describe(`Stats Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getStats (regions:[51477],app:"5fHa6zTDBohz4RrsM")  { cache } }")', (done) => {
    const query = NearestSDK.stats.getStatsQuery({
      regions: [51477],
      fields: ['cache'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getStats (regions:[51477],app:"5fHa6zTDBohz4RrsM")  { cache } }');
    done();
  });

  it('Get stats for region 51477 and return (Promise) its data.', (done) => {
    NearestSDK.stats.getStats({
      regions: [51477],
      fields: ['cache'],
    })
      .then((result) => {
        expect(result).to.be.an('object')
          .and.to.have.property('cache')
          .and.to.be.an('array')
          .and.to.have.lengthOf(1);
        expect(result.cache[0]).to.be.an('object')
          .and.to.have.property('context')
          .and.to.be.an('object');
        expect(result.cache[0]).to.be.an('object')
          .and.to.have.property('values')
          .and.to.be.an('object');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get countries nodes available for app 5fHa6zTDBohz4RrsM and return (Promise) its data.', (done) => {
    NearestSDK.stats.getCountriesNodesAvailable({
      fields: ['countries'],
    })
      .then((result) => {
        expect(result).to.be.an('object')
          .and.to.have.property('countries')
          .and.to.be.an('array');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  }).timeout(5000);

  it('Get subregions nodes available for app 5fHa6zTDBohz4RrsM and region 64122 and return (Promise) its data.', (done) => {
    NearestSDK.stats.getRegionsNodesAvailable({
      region: 62422,
      fields: ['regions'],
    })
      .then((result) => {
        expect(result).to.be.an('object')
          .and.to.have.property('regions')
          .and.to.be.an('array');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  }).timeout(5000);
});
