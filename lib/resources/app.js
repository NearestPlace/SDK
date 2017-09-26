import ApiExecute from '../execute';
import Query from '../features/query';

const resolver = {
  get(data) {
    return data.getAppById;
  },
};

export default class SDKResourceApp {
  constructor({ apiKey, app, url }) {
    this.apiKey = apiKey;
    this.app = app;
    this.url = url;
  }

  get(options, callback) {
    const { url } = this;
    return ApiExecute(
      `{ ${this.getQuery(options)} }`,
      resolver.get,
      url,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getQuery(options) {
    const { apiKey, app } = this;
    const { fields = ['id'] } = options;
    return Query('getAppById', { id: app }, fields);
  }
}
