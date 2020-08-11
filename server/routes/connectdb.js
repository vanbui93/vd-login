const { Pool, Client } = require('pg');
const connectionString = 'postgres://awnbivlt:upgHKpim0LlUlNDrwfvjrJL29CHkUVT4@satao.db.elephantsql.com:5432/awnbivlt';
const pool = new Pool({
  connectionString: connectionString,
});
module.exports = pool