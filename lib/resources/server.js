import ApiExecute from '../execute';
import Queries from '../queries';

const resolver = {
  info(data) {
    return data.getServerInfo;
  },
};

export default class SDKResourceServer {
  constructor(prepareQueryParams) {
    this.prepareQueryParams = prepareQueryParams;
  }
}

SDKResourceServer.prototype.info = function ServerVersion(opt, cb) {
  return ApiExecute(
    Queries.Server.Info,
    resolver.info,
    cb,
  );
};
