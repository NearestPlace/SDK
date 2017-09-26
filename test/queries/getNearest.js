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

describe(`Nearest Query (AppId: ${TestAppId})`, () => {
  it(`Get Nearest Nodes by Point (${TestPoint.lat},${TestPoint.lng}) and return (Promise) its data.`, (done) => {
    NearestSDK.nodes.nearest({
      lat: TestPoint.lat,
      lng: TestPoint.lng,
      radius: TestPoint.radius,
      fields: ['id'],
    })
      .then((result) => {
        expect(result).to.be.a('array')
          .and.to.have.lengthOf(10);
        done();
      })
      .catch((error) => {
        console.log('Problem', error);
      });
  });
  it(`Get Nearest Nodes by Point (${TestPoint.lat},${TestPoint.lng}) and return (Callback) its data.`, (done) => {
    NearestSDK.nodes.nearest({
      lat: TestPoint.lat,
      lng: TestPoint.lng,
      radius: TestPoint.radius,
      fields: ['id'],
    }, (error, result) => {
      if (error) console.log('Problem', error);
      expect(result).to.be.a('array')
        .and.to.have.lengthOf(10);
      done();
    });
  });
});
