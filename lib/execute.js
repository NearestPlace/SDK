import { request } from 'graphql-request';

export default function (query, resolver, url, cb) {
  const requestPromise = request(url, query);
  if (cb) {
    requestPromise
      .then((data) => {
        cb(null, resolver ? resolver(data) : data);
      })
      .catch((errors) => {
        cb(errors, null);
      });
    return false;
  }
  return new Promise((resolve, reject) => {
    requestPromise
      .then((data) => {
        resolve(resolver(data));
      })
      .catch(reject);
  });
}
