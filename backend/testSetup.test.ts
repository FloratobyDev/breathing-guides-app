import knex from "knex";
import knexConfig from "../knexfile";

const query = knex(knexConfig.test);

beforeAll(async () => {
  console.log('running migrations...');
  await query.migrate.latest();
  await query.seed.run();
});

afterAll(async () => {
  await query.migrate.rollback();
  await query.destroy();
});

describe('Database Connection Tests', () => {
  test('connects to the database and performs a query', async () => {
    const result = await query.raw('SELECT * FROM techniques');
    console.log('result:', result);
    expect(result.rows).toBeInstanceOf(Array);
    expect(result.rows.length).toBeGreaterThan(0); // assuming there's data in your table
  });
});
