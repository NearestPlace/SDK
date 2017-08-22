const Queries = {};

Queries.Nodes = {
  Get: 'ABC',
};

Queries.Server = {
  Info: `
    query q {
      getServerInfo {
        version
      }
    }
  `,
};
export default Queries;
