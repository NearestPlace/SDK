import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const TestAppId = '5fHa6zTDBohz4RrsM';

const NearestSDK = new NearestClient({
  apiKey: '1-2-3',
  app: TestAppId,
});

describe(`App Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getAppById (id:\'5fHa6zTDBohz4RrsM\')  { id } }")', (done) => {
    const query = NearestSDK.app.getQuery({
      fields: ['id'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getAppById (id:"5fHa6zTDBohz4RrsM")  { id } }');
    done();
  });

  it(`Get App by its id (${TestAppId}) and return (Promise) its data.`, (done) => {
    NearestSDK.app.get({
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.a('object')
          .and.to.have.property('id')
          .and.to.be.equal(TestAppId);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it(`Get App by its id (${TestAppId}) and return (Callback) its data.`, (done) => {
    NearestSDK.app.get({
      fields: ['id'],
    }, (error, result) => {
      if (error) console.log('Problem', error);
      expect(result).to.be.a('object')
        .and.to.have.property('id')
        .and.to.be.equal(TestAppId);
      done();
    });
  });
});
