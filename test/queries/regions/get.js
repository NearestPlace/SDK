import chai from 'chai';
import { NearestClient } from '../../../lib/index';

const { expect } = chai;
const TestAppId = '5fHa6zTDBohz4RrsM';
const apiKey = process.env.NEARESTAPIKEY || '';

const steps = ['13.437527,52.4945519', '13.4356,52.49405'];

const NearestSDK = new NearestClient({
  apiKey,
  app: TestAppId,
});

describe(`Regions Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getRegionById (id:51477)  { id } }")', (done) => {
    const query = NearestSDK.regions.getQuery({
      id: [51477],
      fields: ['id'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getRegionById (id:[51477])  { id } }');
    done();
  });

  it('Get a region for id 51477 and return (Promise) its data.', (done) => {
    NearestSDK.regions.get({
      id: 51477,
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.an('array')
          .and.to.have.lengthOf(1);
        expect(result[0]).to.be.an('object')
          .and.to.have.property('id')
          .and.to.be.equal(51477);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get a region for path Germany/Berlin and return (Promise) its data.', (done) => {
    NearestSDK.regions.getByPath({
      path: 'Germany/Berlin',
      lang: 'de',
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.an('array')
          .and.to.have.lengthOf(1);
        expect(result[0]).to.be.an('object')
          .and.to.have.property('id')
          .and.to.be.equal(62422);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get regions for name "Bologna" and return (Promise) its data.', (done) => {
    NearestSDK.regions.getByName({
      name: 'Bologna',
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.an('array')
          .and.to.have.lengthOf(2);
        expect(result[0]).to.be.an('object')
          .and.to.have.property('id')
          .and.to.be.equal(43172);
        expect(result[1]).to.be.an('object')
          .and.to.have.property('id')
          .and.to.be.equal(5849944);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });
});
