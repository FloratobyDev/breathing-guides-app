import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "",
      database: "breathing_app_db",
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
      connectionString: process.env.INTERNAL_DB,
    },
    migrations: {
      directory: __dirname + "/packages/server/migrations",
      tableName: "knex_migrations",
    },
  },
};

export default config;
