require('dotenv').config();
import 'reflect-metadata';
import dataConsoles from './config';
import { TotalElectricity } from './entity/TotalElectricity';
import { MomentPower } from './entity/MomentPower';
import db from './database';

const savePosTotal = async () => {
  const totals = await Promise.all(dataConsoles.map(console => console.posTotal()));
  const now = new Date();

  const entities = totals.map((total) => db.getRepository(TotalElectricity).create({
    time: now,
    name: total.name,
    total: total.total,
  }));

  await db.manager.save(entities);
  console.log('Saved total power consumption', now);
}

const saveCurrentPower = async () => {
  const powers = await Promise.all(dataConsoles.map(console => console.currentPower()));
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
    // every minute
    setInterval(savePosTotal, 60 * 1000);

    // every second
    setInterval(saveCurrentPower, 1000);
  });

