import ApiExecute from '../execute';
import Query from '../features/query';

const resolver = {
  get(data) {
    return data.getDirections;
  },
};

export default class SDKResourceApp {
  constructor({ apiKey, app, url }) {
    this.apiKey = apiKey;
    this.app = app;
    this.url = url;
  }

  get(options, callback) {
    const { url, apiKey } = this;
    return ApiExecute(
      `{ ${this.getQuery(options)} }`,
      resolver.get,
      url,
      apiKey,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getQuery(options) {
    const { app } = this;
    const {
      steps, mode, fields = ['id'],
    } = options;
    return Query('getDirections', { steps, mode }, fields);
  }
}
