import ApiExecute from '../execute';
import Queries from '../queries';
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
    const { apiKey, app, url } = this;
    const { id, fields = ['id'] } = options;
    return ApiExecute(
      Queries.Nodes.Get({ app, id }, fields),
      resolver.get,
      url,
      callback,
    );
  }

  getByRegion(options, callback) {
    const { apiKey, app, url } = this;
    const { regionId, limit = 10, fields = ['id'] } = options;
    return ApiExecute(
      Queries.Nodes.GetByRegion({ app, regionId, limit }, fields),
      resolver.getByRegion,
      url,
      callback,
    );
  }

  getByBound(options, callback) {
    const { apiKey, app, url } = this;
    const { bound, limit = 10, fields = ['id'] } = options;
    return ApiExecute(
      Queries.Nodes.GetByBound({ app, bound, limit }, fields),
      resolver.getByBound,
      url,
      callback,
    );
  }

  nearest(options, callback) {
    const { apiKey, app, url } = this;
    const { lat, lng, radius, limit, lang, fields = ['id'] } = options;
    return ApiExecute(
      Queries.Nodes.Nearest({ app, lat, lng, radius, limit, lang }, fields),
      resolver.nearest,
      url,
      callback,
    );
  }

  cluster(options, callback) {
    const { apiKey, app, url } = this;
    const { lat, lng, radius, regionId, bound, precision } = options;
    const fields = ['cluster'];
    return ApiExecute(
      Queries.Nodes.Cluster({ app, lat, lng, radius, regionId, bound, precision }, fields),
      resolver.cluster.bind(null, options),
      url,
      callback,
    );
  }
}
