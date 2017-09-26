import ApiExecute from '../execute';
import Query from '../features/query';

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

  info(options, callback) {
    const { url } = this;
    return ApiExecute(
      `{ ${this.infoQuery(options)} }`,
      resolver.info,
      url,
      callback,
    );
  }
  /**
   * Get raw query
   */
  infoQuery(options) {
    const { apiKey } = this;
    const { fields = ['version'] } = options;
    return Query('getServerInfo', options, fields);
  }
}
