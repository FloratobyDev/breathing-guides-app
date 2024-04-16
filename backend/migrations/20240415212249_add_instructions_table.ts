import type { Knex } from "knex";

/**
enum DifficultyTypes {
  easy
  medium
  hard
}

Table instructions{
  id serial [pk]
  techniqueId integer [ref: > techniques.id]
  order smallint
  name varchar(100) [not null]
  description varchar(400) [not null]
}
 */

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE instructions (
      id serial PRIMARY KEY,
      techniqueId integer REFERENCES techniques(id),
      instruction_order smallint,
      name varchar(100) NOT NULL,
      description varchar(400) NOT NULL
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP TABLE instructions;
  `);
}
