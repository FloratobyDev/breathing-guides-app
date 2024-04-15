import knex from "knex";
import knexConfig from "../knexfile";

const config = knex(knexConfig.development);

export default config;