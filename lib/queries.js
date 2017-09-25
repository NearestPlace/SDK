import Query from 'graphql-query-builder';

const Queries = {};

Queries.Nodes = {
  Get: (args, fields = []) => {
    const queryContent = new Query('getNodeById', args).find(fields);
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
