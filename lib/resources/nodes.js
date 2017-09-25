import ApiExecute from '../execute';
import Queries from '../queries';


const resolver = {
  get(data) {
    return data.getNodeById;
  },
  nearest(data) {
    return data.getNearestNodesByPoint;
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
}
