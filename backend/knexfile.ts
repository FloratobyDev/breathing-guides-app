import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "",
      database: process.env.DEV_DB_URL,
    },
    migrations: {
      directory: __dirname + "/backend/migrations",
    },
    seeds: {
      directory: __dirname + "/backend/seeds",
    },
  },

  test: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "",
      database: process.env.TEST_DB_URL,
    },
    migrations: {
      directory: __dirname + "/backend/migrations",
    },
    seeds: {
      directory: __dirname + "/backend/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.PROD_DB_URL,
    },
    migrations: {
      directory: __dirname + "/packages/server/migrations",
      tableName: "knex_migrations",
    },
  },
};

export default config;
