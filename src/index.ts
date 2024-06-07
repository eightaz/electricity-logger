require('dotenv').config();
import 'reflect-metadata';
import db from './database';
import dataConsoles from './sources';
import DataFetcher from './DataFetcher';

async function savePosTotal(time: Date) {
  await Promise.all(
    dataConsoles.map(
      async dataConsole => dataConsole.totalElectricityRepository.create({
        time,
        total: await DataFetcher.fetchPosTotal(dataConsole),
      })
    )
  ).then(async totals => await db.manager.save(totals));

  console.log(time, 'Saved total power consumption');
}

async function saveCurrentPower(time: Date) {
  await Promise.all(
    dataConsoles.map(
      async dataConsole => dataConsole.momentPowerRepository.create({
        time,
        power: await DataFetcher.fetchCurrentPower(dataConsole),
      })
  )
  ).then(async powers => await db.manager.save(powers));

  console.log(time, 'Saved current power');
}

async function main() {
  await db.initialize();

  // run both functions on startup
  await Promise.all([
    savePosTotal(new Date),
    saveCurrentPower(new Date),
  ])

  // every minute
  setInterval(() => savePosTotal(new Date), 60 * 1000);

  // every second
  setInterval(() => saveCurrentPower(new Date), 1000);
}

main();
