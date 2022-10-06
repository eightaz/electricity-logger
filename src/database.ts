import { DataSource } from "typeorm";
import { MomentPower } from "./entity/MomentPower";
import { TotalElectricity } from "./entity/TotalElectricity";

const database = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: ['error'],
  // logging: ["error", "query"],
  // entities: [__dirname + '/entity/**/*.{js,ts}'],
  entities: [MomentPower, TotalElectricity],
  // migrationsRun: !process.env.TS_NODE_DEV,
});

export default database;
