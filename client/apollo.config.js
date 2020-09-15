require('dotenv').config()

module.exports = {
  client: {
    name: 'Space Explorer [web]',
    service: process.env.APOLLO_GRAPH_NAME,
  },
};
