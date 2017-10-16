import ApiExecute from '../execute';
import Query from '../features/query';

const resolver = {
  get(data) {
    return data.getStats;
  },
  getCountriesNodesAvailable(data) {
    return data.getCountriesNodesAvailable;
  },
  getRegionsNodesAvailable(data) {
    return data.getRegionsNodesAvailable;
  },
};

export default class SDKResourceApp {
  constructor({ apiKey, app, url }) {
    this.apiKey = apiKey;
    this.app = app;
    this.url = url;
  }

  getStats(options, callback) {
    const { url, apiKey } = this;
    return ApiExecute(
      `{ ${this.getStatsQuery(options)} }`,
      resolver.get,
      url,
      apiKey,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getStatsQuery(options) {
    const { app } = this;
    const { regions, fields = ['countries'] } = options;
    return Query('getStats', { regions, app }, fields);
  }

  getCountriesNodesAvailable(options, callback) {
    const { url, apiKey } = this;
    return ApiExecute(
      `{ ${this.getCountriesNodesAvailableQuery(options)} }`,
      resolver.getCountriesNodesAvailable,
      url,
      apiKey,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getCountriesNodesAvailableQuery(options) {
    const { app } = this;
    const { fields = ['cache'] } = options;
    return Query('getCountriesNodesAvailable', { app }, fields);
  }

  getRegionsNodesAvailable(options, callback) {
    const { url, apiKey } = this;
    return ApiExecute(
      `{ ${this.getRegionsNodesAvailableQuery(options)} }`,
      resolver.getRegionsNodesAvailable,
      url,
      apiKey,
      callback,
    );
  }
  /**
   * Get raw query
   */
  getRegionsNodesAvailableQuery(options) {
    const { app } = this;
    const { region, fields = ['cache'] } = options;
    return Query('getRegionsNodesAvailable', { region, app }, fields);
  }
}
