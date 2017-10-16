import ApiExecute from '../execute';
import Query from '../features/query';

const resolver = {
  get(data) {
    return data.getRegionById;
  },
  getByName(data) {
    return data.getRegionByName;
  },
  getByPath(data) {
    return data.getRegionByPath;
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
    const { id, fields = ['id'] } = options;
    return Query('getRegionById', { id }, fields);
  }

  getByPath(options, callback) {
    const { url, apiKey } = this;
    return ApiExecute(
      `{ ${this.getByPathQuery(options)} }`,
      resolver.getByPath,
      url,
      apiKey,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getByPathQuery(options) {
    const { app } = this;
    const { path, lang, fields = ['id'] } = options;
    return Query('getRegionByPath', { path, lang }, fields);
  }

  getByName(options, callback) {
    const { url, apiKey } = this;
    return ApiExecute(
      `{ ${this.getByNameQuery(options)} }`,
      resolver.getByName,
      url,
      apiKey,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getByNameQuery(options) {
    const { app } = this;
    const { name, lang, fields = ['id'] } = options;
    return Query('getRegionByName', { name, lang }, fields);
  }
}
