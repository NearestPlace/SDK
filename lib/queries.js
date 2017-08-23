const Queries = {};

Queries.Nodes = {
  Get: `
    query q ($id: String!) {
      getNodeById(id: $id) {
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
