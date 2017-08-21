import SDKResourceNodes from './resources/nodes';

class SDK {
  constructor({ publicKey }) {
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
