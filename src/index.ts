require('dotenv').config();
import 'reflect-metadata';
import dataConsoles, { DataConsole } from './config';
import { TotalElectricity } from './entity/TotalElectricity';
import { MomentPower } from './entity/MomentPower';
import db from './database';
import axios from 'axios';

async function fetchCurrentPower(console: DataConsole) {
  return axios
    .get(console.ip + "/api/v1/measurements/p")
    .then(r => ({
      name: console.name,
      power: r?.data?.value
    }));
}

async function fetchPosTotal(console: DataConsole) {
  return axios
    .get(console.ip + "/api/v1/meters/ea-pos-total")
    .then(r => ({
      name: console.name,
      total: r?.data?.value / 1000
    }));
}

async function savePosTotal() {
  const totals = await Promise.all(dataConsoles.map(fetchPosTotal));
  const now = new Date();

  const entities = totals.map((total) =>
    db.getRepository(TotalElectricity).create({
      time: now,
      name: total.name,
      total: total.total,
    })
  );

  await db.manager.save(entities);
  console.log('Saved total power consumption', now);
}

async function saveCurrentPower() {
  const powers = await Promise.all(dataConsoles.map(fetchCurrentPower));
  const now = new Date();

  const entities = powers.map((power) =>
    db.getRepository(MomentPower).create({
      time: now,
      name: power.name,
      power: power.power,
    })
  );

  await db.manager.save(entities);
  console.log('Saved current power', now);
}

db.initialize()
  .then(async () => {
    await savePosTotal();
    // every 10 minutes
    setInterval(savePosTotal, 10 * 60 * 1000);

    // every second
    setInterval(saveCurrentPower, 1000);
  });

