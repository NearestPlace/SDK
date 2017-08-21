import graphQLFetch from 'graphql-fetch';
import SDK_SETTINGS from './settings';

const fetch = graphQLFetch(SDK_SETTINGS.endpoint);

export default function (query, queryVars, cb) {
  const fetchPromise = fetch({
    ...query,
  }, queryVars, {});
  if (cb) {
    fetchPromise.then((data) => {
      cb(null, data);
    }, (errors) => {
      cb(errors, null);
    });
    return false;
  }
  return fetchPromise;
}
