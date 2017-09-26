import chai from 'chai';
import { NearestClient } from '../../lib/index';

const expect = chai.expect;
const TestAppId = '5fHa6zTDBohz4RrsM';
const TestPoint = {
  lat: 52.49,
  lng: 13.43,
  radius: 100000,
};

const NearestSDK = new NearestClient({
  apiKey: '1-2-3',
  app: TestAppId,
});

describe(`Cluster Query (AppId: ${TestAppId})`, () => {
  it('Get the raw Query ("{  getNodesCluster (app:\"5fHa6zTDBohz4RrsM\",regionId:[62422])  { cluster } }")', (done) => {
    const query = NearestSDK.nodes.clusterQuery({
      regionId: [62422],
    });
    expect(`{ ${query} }`).to.be.a('string')
      .and.to.be.equal('{  getNodesCluster (app:"5fHa6zTDBohz4RrsM",regionId:[62422])  { cluster } }');
    done();
  });

  it('Get a cluster for a specific region (62422) via Promise', (done) => {
    NearestSDK.nodes.cluster({
      regionId: [62422],
      fields: ['cluster'],
    })
      .then((result) => {
        expect(result).to.be.an('array');
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });

  it('Get a cluster for a specific region (62422) via Callback', (done) => {
    NearestSDK.nodes.cluster({
      regionId: [62422],
      fields: ['cluster'],
    }, (error, result) => {
      if (error) console.log('Problem:', error);
      expect(result).to.be.an('array');
      done();
    });
  });
});
