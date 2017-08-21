import Queries from './queries';
import ApiExecute from './execute';

class SDK {
  constructor({ publicKey }) {
    this.publicKey = publicKey;
  }
}


SDK.prototype.nodes = {
  get(opt, cb) {
    return ApiExecute(Queries.Nodes.Get, opt, cb);
  },
};

export default SDK;
