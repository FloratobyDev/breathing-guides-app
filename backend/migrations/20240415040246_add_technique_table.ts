import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("technique", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("technique");
}

