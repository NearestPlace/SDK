const Queries = {};

Queries.Nodes = {
  Get: `
    query q ($id: String! $app: String!) {
      getNodeById(id: $id, app: $app) {
        id
      }
    }
  `,
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
