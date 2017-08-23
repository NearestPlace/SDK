import ApiExecute from '../execute';
import Queries from '../queries';

const resolver = {
  get(data) {
    return data.getNodeById;
  },
};

export default class SDKResourceNodes {
  constructor(prepareQueryParams) {
    this.prepareQueryParams = prepareQueryParams;
  }
}

SDKResourceNodes.prototype.get = function NodesGet(opt, cb) {
  return ApiExecute(
    Queries.Nodes.Get,
    this.prepareQueryParams(opt),
    resolver.get,
    cb,
  );
};
