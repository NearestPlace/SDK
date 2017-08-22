const Queries = {};

Queries.Nodes = {
  Get: 'ABC',
};

Queries.Server = {
  Version: `
    query q {
      getServerVersion {
        version
      }
    }
  `,
};
export default Queries;
