require('dotenv').config();
import 'reflect-metadata';
import dataConsoles, { DataConsole } from './sources';
import db from './database';

/**
 * Script for migrating existing data to the new schema
 *
 * UNFINISHED
 * TODO: fix sql and import all data
 */
async function migrate() {
  await db.initialize();


  for (const dataConsole of dataConsoles) {
    console.log('Migrating', dataConsole.name);

    let results = await fetchBatchMomentPower(dataConsole);

    let i = 0;
    while (results.length) {
      await saveMomentPowerBatch(dataConsole, results);
      results = await fetchBatchMomentPower(dataConsole, ++i);
    }

    console.log('finished migrating moment power for', dataConsole.name);

    i = 0;
    results = await fetchBatchTotalPower(dataConsole);
    while (results.length) {
      await saveTotalPowerBatch(dataConsole, results);
      results = await fetchBatchTotalPower(dataConsole, ++i);
    }
    console.log('finished migrating total power for', dataConsole.name);

  }
}

const batch = 10000;
async function fetchBatchMomentPower(dataConsole: DataConsole, i: number = 0) {

  return db.query(
    `SELECT
      time,
      power
    FROM moment_power
    WHERE name LIKE '?'
    ORDER BY "time" ASC
    LIMIT ?
    OFFSET ?`,
    [dataConsole.name, batch, i * batch]
  );
}

async function fetchBatchTotalPower(dataConsole: DataConsole, i: number = 0) {
  return db.query(
    `SELECT
      time,
      total
    FROM total_electricity
    WHERE name LIKE '?'
    ORDER BY "time" ASC
    LIMIT ?
    OFFSET ?`,
    [dataConsole.name, batch, i * batch]
  );
}

async function saveMomentPowerBatch(dataConsole: DataConsole, batch: any[]) {
  return db.query('INSERT INTO ? (time, power) values (?)', [
    dataConsole.momentPowerRepository.metadata.tableName,
    batch.map(({ time, power }) => [time, power])
  ])
}

async function saveTotalPowerBatch(dataConsole: DataConsole, batch: any[]) {
  return db.query('INSERT INTO ? (time, total) values (?)', [
    dataConsole.totalElectricityRepository.metadata.tableName,
    batch.map(({ time, total }) => [time, total])
  ])
}

migrate()
