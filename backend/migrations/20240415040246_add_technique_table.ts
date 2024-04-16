import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
  CREATE TYPE DifficultyTypes AS ENUM ('easy', 'medium', 'hard');
`);

  await knex.raw(`
    CREATE TABLE techniques (
      id serial PRIMARY KEY,
      purpose varchar(100),
      difficulty DifficultyTypes,
      culture varchar(100),
      duration real,
      name varchar(100) NOT NULL,
      description varchar(400) NOT NULL
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    DROP TABLE techniques;
  `);

  await knex.raw(`
    DROP TYPE DifficultyTypes;
  `);
}
