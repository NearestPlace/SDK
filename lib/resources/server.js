import ApiExecute from '../execute';
import Queries from '../queries';

export default class SDKResourceServer {
  constructor(prepareQueryParams) {
    this.prepareQueryParams = prepareQueryParams;
  }
}

SDKResourceServer.prototype.version = function ServerVersion(opt, cb) {
  return ApiExecute(
    Queries.Server.Version,
    {},
    'getServerVersion',
    cb,
  );
};
