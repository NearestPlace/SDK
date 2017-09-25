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
  constructor({ apiKey, app }) {
    this.apiKey = apiKey;
    this.app = app;
  }

  get(options, callback) {
    const { apiKey, app } = this;
    const { id, fields = ['id'] } = options;
    return ApiExecute(
      Queries.Nodes.Get({ app, id }, fields),
      resolver.get,
      callback,
    );
  }

  nearest(options, callback) {
    const { apiKey, app } = this;
    const { lat, lng, radius, limit, lang, fields = ['id'] } = options;
    return ApiExecute(
      Queries.Nodes.Nearest({ app, lat, lng, radius, limit, lang }, fields),
      resolver.nearest,
      callback,
    );
  }
}
