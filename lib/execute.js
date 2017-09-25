// import graphQLFetch from 'graphql-fetch';
import { request } from 'graphql-request';

const url = 'https://api.nearest.place/graphql';

export default function (query, resolver, cb) {
  const fetchPromise = request(url, query);
  if (cb) {
    fetchPromise
      .then((data) => {
        cb(null, resolver ? resolver(data) : data);
      })
      .catch((errors) => {
        cb(errors, null);
      });
    return false;
  }
  return new Promise((resolve, reject) => {
    fetchPromise
      .then((data) => {
        resolve(resolver(data));
      })
      .catch(reject);
  });
}
