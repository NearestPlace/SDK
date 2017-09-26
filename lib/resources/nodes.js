import ApiExecute from '../execute';
import Query from '../features/query';
import Geohash from '../features/geohash';

const resolver = {
  get(data) {
    return data.getNodeById;
  },

  getByRegion(data) {
    return data.getNodesByRegion;
  },

  getByBound(data) {
    return data.getNodesByBound;
  },

  nearest(data) {
    return data.getNearestNodesByPoint;
  },

  cluster({ precision = 11 }, data) {
    if (!data && !data.getNodesCluster && !data.getNodesCluster.cluster) return [];
    const hashes = data.getNodesCluster.cluster.match(new RegExp(`.{1,${precision}}`, 'g'));
    return hashes.map((e) => {
      const { lat, lon } = Geohash.decode(e, 11);
      return [lat, lon];
    });
  },
};

export default class SDKResourceNodes {
  constructor({ apiKey, app, url }) {
    this.apiKey = apiKey;
    this.app = app;
    this.url = url;
  }

  get(options, callback) {
    const { url } = this;
    return ApiExecute(
      `{ ${this.getQuery(options)} }`,
      resolver.get,
      url,
      callback,
    );
  }
  /**
   * Return the raw query
   */
  getQuery(options) {
    const { apiKey, app } = this;
    const { id, fields = ['id'] } = options;
    return Query('getNodeById', { app, id }, fields);
  }

  getByRegion(options, callback) {
    const { url } = this;
    return ApiExecute(
      `{ ${this.getByRegionQuery(options)} }`,
      resolver.getByRegion,
      url,
      callback,
    );
  }
  /**
   * Get raw query for getNodesByRegion
   */
  getByRegionQuery(options) {
    const { apiKey, app } = this;
    const { regionId, limit = 10, fields = ['id'] } = options;
    return Query('getNodesByRegion', { app, regionId, limit }, fields);
  }

  getByBound(options, callback) {
    const { apiKey, app, url } = this;
    return ApiExecute(
      `{ ${this.getByBoundQuery(options)} }`,
      resolver.getByBound,
      url,
      callback,
    );
  }
  /**
   * Get raw query for getNodesByBound
   */
  getByBoundQuery(options) {
    const { apiKey, app } = this;
    const { bound, limit = 10, fields = ['id'] } = options;
    return Query('getNodesByBound', { app, bound, limit }, fields);
  }

  nearest(options, callback) {
    const { url } = this;
    return ApiExecute(
      `{ ${this.nearestQuery(options)} }`,
      resolver.nearest,
      url,
      callback,
    );
  }
  /**
   * Get raw query for getNearestNodesByPoint
   */
  nearestQuery(options) {
    const { apiKey, app } = this;
    const { lat, lng, radius, limit = 10, lang, fields = ['id'] } = options;
    return Query('getNearestNodesByPoint', { app, lat, lng, radius, limit, lang }, fields);
  }

  cluster(options, callback) {
    const { url } = this;
    return ApiExecute(
      `{ ${this.clusterQuery(options)} }`,
      resolver.cluster.bind(null, options),
      url,
      callback,
    );
  }
  /**
   * Get raw query for getNodesCluster
   */
  clusterQuery(options) {
    const { apiKey, app } = this;
    const { lat, lng, radius, regionId, bound, precision } = options;
    const fields = ['cluster'];
    return Query('getNodesCluster', { app, lat, lng, radius, regionId, bound, precision }, fields);
  }
}
