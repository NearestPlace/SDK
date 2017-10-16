import chai from 'chai';
import { NearestClient } from '../../lib/index';

const { expect } = chai;
const TestAppId = '5fHa6zTDBohz4RrsM';
const apiKey = process.env.NEARESTAPIKEY || '';

const steps = ['13.437527,52.4945519', '13.4356,52.49405'];

const NearestSDK = new NearestClient({
  apiKey,
  app: TestAppId,
});

describe(`Directions Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getDirections (steps:\'5fHa6zTDBohz4RrsM\')  { duration, distance } }")', (done) => {
    const query = NearestSDK.directions.getQuery({
      steps,
      fields: ['duration', 'distance'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getDirections (steps:["13.437527,52.4945519","13.4356,52.49405"])  { duration,distance } }');
    done();
  });

  it('Get a directions for 2 steps and return (Promise) its data.', (done) => {
    NearestSDK.directions.get({
      steps,
      fields: ['duration', 'distance', 'geometry'],
    })
      .then((result) => {
        expect(result).to.be.a('object')
          .and.to.have.property('duration')
          .and.to.be.closeTo(40, 5);
        expect(result).to.be.a('object')
          .and.to.have.property('distance')
          .and.to.be.closeTo(246, 5);
        expect(result).to.be.a('object')
          .and.to.have.property('geometry')
          .and.to.be.a('string');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });
});
