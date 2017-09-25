import Query from 'graphql-query-builder';

const Queries = {};

Queries.Nodes = {
  Get: (args, fields = ['id']) => {
    const queryContent = new Query('getNodeById', args).find(fields);
    return `{
      ${queryContent}
    }`;
  },
  Nearest: (args, fields = ['id']) => {
    Object.keys(args).forEach((key) => { if (!args[key]) delete args[key]; });
    const queryContent = new Query('getNearestNodesByPoint', args).find(fields);
    return `{
      ${queryContent}
    }`;
  },
  Cluster: (args, fields = ['id']) => {
    Object.keys(args).forEach((key) => { if (!args[key]) delete args[key]; });
    const queryContent = new Query('getNodesCluster', args).find(fields);
    return `{
      ${queryContent}
    }`;
  },
};

Queries.Apps = {
  Get: (args, fields = ['id']) => {
    const queryContent = new Query('getAppById', args).find(fields);
    return `{
      ${queryContent}
    }`;
  },
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
