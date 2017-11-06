import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;

const apiKey = process.env.NEARESTAPIKEY || '';
const TestAppId = '5fHa6zTDBohz4RrsM';
const TestBound = [
  [13.0883500240376, 52.3382599827022],
  [13.0883500240376, 52.6755099903978],
  [13.7611599647432, 52.6755099903978],
  [13.7611599647432, 52.3382599827022],
  [13.0883500240376, 52.3382599827022]];

const TestExclude = 62422;


const NearestSDK = new NearestClient({
  apiKey,
  app: TestAppId,
});

describe(`Cluster Query by region by bound (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getNodesClusterByRegionsByBound (app:\"5fHa6zTDBohz4RrsM\", .... ")', (done) => {
    const query = NearestSDK.nodes.clusterByRegionsByBoundQuery({
      bound: TestBound,
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getNodesClusterByRegionsByBound (app:"5fHa6zTDBohz4RrsM",bound:[[13.0883500240376,52.3382599827022],[13.0883500240376,52.6755099903978],[13.7611599647432,52.6755099903978],[13.7611599647432,52.3382599827022],[13.0883500240376,52.3382599827022]])  { cluster,regions } }');
    done();
  });

  it('Get a cluster for a specific bound via Promise', (done) => {
    NearestSDK.nodes.clusterByRegionsByBound({
      bound: TestBound,
    })
      .then((result) => {
        // console.log(result);
        expect(result).to.be.an('object')
          .and.to.have.property('coordinates')
          .and.to.be.an('array');
        expect(result).to.be.an('object')
          .and.to.have.property('regions')
          .and.to.be.an('array');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get a cluster for a specific bound via Callback', (done) => {
    NearestSDK.nodes.clusterByRegionsByBound({
      bound: TestBound,
    }, (error, result) => {
      if (error) console.log('Problem', error);
      if (result) {
        // console.log(result);
        expect(result).to.be.an('object')
          .and.to.have.property('coordinates')
          .and.to.be.an('array');
        expect(result).to.be.an('object')
          .and.to.have.property('regions')
          .and.to.be.an('array')
          .and.to.have.lengthOf.not.equal(0);
        done();
      }
    });
  });

  it('Get a cluster for a specific bound and exclude (2978650) via Promise', (done) => {
    NearestSDK.nodes.clusterByRegionsByBound({
      bound: TestBound,
      exclude: [TestExclude],
    })
      .then((result) => {
        // console.log(result);
        expect(result).to.be.an('object')
          .and.to.have.property('coordinates')
          .and.to.be.an('array');
        expect(result).to.be.an('object')
          .and.to.have.property('regions')
          .and.to.be.an('array')
          .and.that.does.not.include(TestExclude);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });
});
