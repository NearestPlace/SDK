import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const TestAppId = '5fHa6zTDBohz4RrsM';
const TestNodeIds = ['TueShSRa5WTTkazoS', 'QZdcxZkYCQ2nJz7PZ'];

const NearestSDK = new NearestClient({
  apiKey: '1-2-3',
  app: TestAppId,
});

describe(`Node Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getNodeById (app:"5fHa6zTDBohz4RrsM",id:["TueShSRa5WTTkazoS","QZdcxZkYCQ2nJz7PZ"])  { id } }")', (done) => {
    const query = NearestSDK.nodes.getQuery({
      id: TestNodeIds,
      fields: ['id'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getNodeById (app:"5fHa6zTDBohz4RrsM",id:["TueShSRa5WTTkazoS","QZdcxZkYCQ2nJz7PZ"])  { id } }');
    done();
  });

  it(`Get Node by its ids (${TestNodeIds}) and return (Promise) its data.`, (done) => {
    NearestSDK.nodes.get({
      id: TestNodeIds,
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.a('array')
          .and.to.have.lengthOf(2);
        expect(result[0]).to.be.a('object')
          .and.to.have.property('id')
          .and.to.be.equal(TestNodeIds[1]);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it(`Get Node by its ids (${TestNodeIds}) and return (Callback) its data.`, (done) => {
    NearestSDK.nodes.get({
      id: TestNodeIds,
      fields: ['id'],
    }, (error, result) => {
      if (error) console.log('Problem', error);
      expect(result).to.be.a('array')
        .and.to.have.lengthOf(2);
      expect(result[0]).to.be.a('object')
        .and.to.have.property('id')
        .and.to.be.equal(TestNodeIds[1]);
      done();
    });
  });
});
