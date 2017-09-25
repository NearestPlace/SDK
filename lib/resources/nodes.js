import ApiExecute from '../execute';
import Queries from '../queries';


const resolver = {
  get(data) {
    return data.getNodeById;
  },
};

export default class SDKResourceNodes {
  constructor({ publicKey, app }) {
    this.publicKey = publicKey;
    this.app = app;
  }
}

SDKResourceNodes.prototype.get = function NodesGet(opt, cb) {
  const { publicKey, app } = this;
  const { id, fields = ['id'] } = opt;
  return ApiExecute(
    Queries.Nodes.Get({ app, id }, fields),
    resolver.get,
    cb,
  );
};
