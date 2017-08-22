import graphQLFetch from 'graphql-fetch';

const fetch = graphQLFetch('http://localhost:4000/graphql');

export default function (query, queryVars, resolver, cb) {
  const fetchPromise = fetch(query, queryVars, {});
  if (cb) {
    fetchPromise.then(({ errors, data }) => {
      if (errors) {
        cb(errors, null);
      } else {
        cb(null, resolver ? resolver(data) : data);
      }
    }, (errors) => {
      cb(errors, null);
    });
    return false;
  }
  return fetchPromise;
}
