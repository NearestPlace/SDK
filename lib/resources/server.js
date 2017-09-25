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
    this.url = prepareQueryParams.url;
  }
}

SDKResourceServer.prototype.info = function ServerVersion(opt, cb) {
  const { url } = this;
  return ApiExecute(
    Queries.Server.Info,
    resolver.info,
    url,
    cb,
  );
};
