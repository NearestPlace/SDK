import GraphQLQueries from './queries';

import SDKResourceNodes from './resources/nodes';
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
    const { apiKey, app } = opt;
    this.apiKey = apiKey;
    this.app = app;

    this.nodes = new SDKResourceNodes(opt);
    this.server = new SDKResourceServer(opt);
  }
}

export const NearestClient = SDK;
export const Queries = GraphQLQueries;
