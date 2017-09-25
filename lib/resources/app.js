import ApiExecute from '../execute';
import Queries from '../queries';


const resolver = {
  get(data) {
    return data.getAppById;
  },
};

export default class SDKResourceApp {
  constructor({ apiKey, app, url }) {
    this.apiKey = apiKey;
    this.app = app;
    this.url = url;
  }

  get(options, callback) {
    const { apiKey, app, url } = this;
    const { fields = ['id'] } = options;
    return ApiExecute(
      Queries.Apps.Get({ id: app }, fields),
      resolver.get,
      url,
      callback,
    );
  }
}
