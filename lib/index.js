import SDKResourceNodes from './resources/nodes';

class SDK {
  constructor(opt) {
    if (!opt || !opt.publicKey) {
      throw new Error('You need to provide your API credentials for the SDK.');
    }
    const { publicKey } = opt;
    this.publicKey = publicKey;

    this.nodes = new SDKResourceNodes(this.prepareQueryParams);
  }

  prepareQueryParams(params) {
    return {
      ...params,
      publicKey: this.publicKey,
    };
  }
}

export default SDK;
