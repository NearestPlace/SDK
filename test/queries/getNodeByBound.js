import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const TestAppId = '5fHa6zTDBohz4RrsM';
const TestBound = [
  [13.0883500240376, 52.3382599827022],
  [13.0883500240376, 52.6755099903978],
  [13.7611599647432, 52.6755099903978],
  [13.7611599647432, 52.3382599827022],
  [13.0883500240376, 52.3382599827022],
];

const NearestSDK = new NearestClient({
  apiKey: '1-2-3',
  app: TestAppId,
});

describe(`NodesByBound (AppId: ${TestAppId})`, () => {
  it('Get the raw Query', (done) => {
    const query = NearestSDK.nodes.getByBoundQuery({
      bound: TestBound,
      fields: ['id'],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getNodesByBound (app:"5fHa6zTDBohz4RrsM",bound:[[13.0883500240376,52.3382599827022],[13.0883500240376,52.6755099903978],[13.7611599647432,52.6755099903978],[13.7611599647432,52.3382599827022],[13.0883500240376,52.3382599827022]],limit:10)  { id } }');
    done();
  });

  it(`Get Node by bound and return (Promise) its data.`, (done) => {
    NearestSDK.nodes.getByBound({
      bound: TestBound,
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

  it(`Get Node by bound and return (Callback) its data.`, (done) => {
    NearestSDK.nodes.getByBound({
      bound: TestBound,
      fields: ['id'],
    }, (error, result) => {
      if (error) console.log('Problem', error);
      expect(result).to.be.a('array');
      done();
    });
  });
});
