import graphQLFetch from 'graphql-fetch';
import pathResolver from 'lodash/get';

const fetch = graphQLFetch('http://localhost:4000/graphql');

export default function (query, queryVars, resolvePath, cb) {
  const fetchPromise = fetch(query, queryVars, {});
  if (cb) {
    fetchPromise.then(({ errors, data }) => {
      if (errors) {
        cb(errors, null);
      } else {
        cb(null, resolvePath ? pathResolver(data, resolvePath) : data);
      }
    }, (errors) => {
      cb(errors, null);
    });
    return false;
  }
  return fetchPromise;
}
