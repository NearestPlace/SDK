import GraphQLQueries from './queries';

import SDKResourceNodes from './resources/nodes';
import SDKResourceServer from './resources/server';

class SDK {
  constructor(opt) {
    if (!opt || !opt.publicKey) {
      throw new Error('You need to provide your API credentials for the SDK.');
    }
    const { publicKey } = opt;
    this.publicKey = publicKey;

    this.nodes = new SDKResourceNodes(this.prepareQueryParams);
    this.server = new SDKResourceServer(this.prepareQueryParams);
  }

  prepareQueryParams(params) {
    return params;
    /*
    // TODO: Later we will assign the publicKey.
    return {
      ...params,
      publicKey: this.publicKey,
    };
    */
  }
}

export const NearestClient = SDK;
export const Queries = GraphQLQueries;
