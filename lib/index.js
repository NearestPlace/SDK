import GraphQLQueries from './queries';

import SDKResourceNodes from './resources/nodes';
import SDKResourceServer from './resources/server';

class SDK {
  constructor(opt) {
    if (
      !opt ||
      !opt.publicKey ||
      !opt.app
    ) {
      throw new Error('You need to provide your API credentials for the SDK.');
    }
    const { publicKey, app } = opt;
    this.publicKey = publicKey;
    this.app = app;

    this.nodes = new SDKResourceNodes(opt);
    this.server = new SDKResourceServer(opt);
  }
}

export const NearestClient = SDK;
export const Queries = GraphQLQueries;
