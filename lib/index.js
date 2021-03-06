import GraphQLQueries from './queries';

import SDKResourceNodes from './resources/nodes';
import SDKResourceApp from './resources/app';
import SDKResourceDirections from './resources/directions';
import SDKResourceRegions from './resources/regions';
import SDKResourceStats from './resources/stats';
import SDKResourceServer from './resources/server';

class SDK {
  constructor(opt) {
    if (
      !opt ||
      !opt.apiKey ||
      !opt.app
    ) {
      throw new Error('You need to provide your API credentials for the SDK.');
    }
    const { apiKey, app, url } = opt;
    this.apiKey = apiKey;
    this.app = app;
    this.url = url || 'https://api.nearest.place/graphql';

    const options = Object.assign({ url: this.url }, opt);

    this.nodes = new SDKResourceNodes(options);
    this.app = new SDKResourceApp(options);
    this.directions = new SDKResourceDirections(options);
    this.regions = new SDKResourceRegions(options);
    this.stats = new SDKResourceStats(options);
    this.server = new SDKResourceServer(options);
  }
}

export const NearestClient = SDK;
export const Queries = GraphQLQueries;
