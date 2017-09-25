import ApiExecute from '../execute';
import Queries from '../queries';


const resolver = {
  get(data) {
    return data.getAppById;
  },
};

export default class SDKResourceApp {
  constructor({ apiKey, app }) {
    this.apiKey = apiKey;
    this.app = app;
  }

  get(options, callback) {
    const { apiKey, app } = this;
    const { fields = ['id'] } = options;
    return ApiExecute(
      Queries.Apps.Get({ id: app }, fields),
      resolver.get,
      callback,
    );
  }
}
