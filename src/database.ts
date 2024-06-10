import { DataSource } from "typeorm";

const database = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrationsRun: true,
  logging: ['error'],
  entities: [__dirname + '/entity/**/*.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
});

export default database;
