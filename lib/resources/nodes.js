import ApiExecute from '../execute';
import Queries from '../queries';

export default class SDKResourceNodes {
  constructor(prepareQueryParams) {
    this.prepareQueryParams = prepareQueryParams;
  }
}

SDKResourceNodes.prototype.get = function NodesGet(opt, cb) {
  return ApiExecute(
    Queries.Nodes.Get,
    this.prepareQueryParams(opt),
    cb,
  );
};
