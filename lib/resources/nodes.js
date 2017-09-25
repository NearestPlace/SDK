import ApiExecute from '../execute';
import Queries from '../queries';


const resolver = {
  get(data) {
    return data.getNodeById;
  },
};

export default class SDKResourceNodes {
  constructor({ apiKey, app }) {
    this.apiKey = apiKey;
    this.app = app;
  }

  get(opt, cb) {
    const { apiKey, app } = this;
    const { id, fields = ['id'] } = opt;
    return ApiExecute(
      Queries.Nodes.Get({ app, id }, fields),
      resolver.get,
      cb,
    );
  }
}
