import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("technique").del();

  // Inserts seed entries
  await knex("technique").insert([
    { name: "technique 1", description: "description 1" },
    { name: "technique 2", description: "description 2" },
    { name: "technique 3", description: "description 3" },
  ]);
}
