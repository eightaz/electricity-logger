import db from './database';
import { Repository } from "typeorm";
import { TotalElectricityMAC } from "./entity/TotalElectricityMAC";
import { MomentPowerMAC } from './entity/MomentPowerMAC';
import { TotalElectricityLiejimas } from "./entity/TotalElectricityLiejimas";
import { MomentPowerLiejimas } from "./entity/MomentPowerLiejimas";
import { TotalElectricityKompresorine } from "./entity/TotalElectricityKompresorine";
import { MomentPowerKompresorine } from "./entity/MomentPowerKompresorine";
import { TotalElectricitySurinkimas } from "./entity/TotalElectricitySurinkimas";
import { MomentPowerSurinkimas } from "./entity/MomentPowerSurinkimas";
import { TotalElectricityLinija1Liejimas } from "./entity/TotalElectricityLinija1Liejimas";
import { MomentPowerLinija1Liejimas } from "./entity/MomentPowerLinija1Liejimas";
import { TotalElectricityLinija1Kaitintuvas } from "./entity/TotalElectricityLinija1Kaitintuvas";
import { MomentPowerLinija1Kaitintuvas } from "./entity/MomentPowerLinija1Kaitintuvas";
import { TotalElectricityLinija2Kaitintuvas } from "./entity/TotalElectricityLinija2Kaitintuvas";
import { MomentPowerLinija2Kaitintuvas } from "./entity/MomentPowerLinija2Kaitintuvas";
import { MomentPowerLinija2Liejimas } from "./entity/MomentPowerLinija2Liejimas";
import { TotalElectricityLinija2Liejimas } from "./entity/TotalElectricityLinija2Liejimas";
import { TotalElectricityLinija3Liejimas } from "./entity/TotalElectricityLinija3Liejimas";
import { MomentPowerLinija3Liejimas } from "./entity/MomentPowerLinija3Liejimas";
import { TotalElectricityLinija3Kaitintuvas } from "./entity/TotalElectricityLinija3Kaitintuvas";
import { MomentPowerLinija3Kaitintuvas } from "./entity/MomentPowerLinija3Kaitintuvas";
import { MomentPowerSingle, TotalElectricitySingle } from "./entity/Abstract";

export class DataConsole {
  name: string;
  ip: string;
  totalElectricityRepository: Repository<TotalElectricitySingle>;
  momentPowerRepository: Repository<MomentPowerSingle>;
}

const consoles: DataConsole[] = [
  {
    name: 'Liejimas Chilleriai',
    ip: 'http://10.0.7.131',
    totalElectricityRepository: db.getRepository(TotalElectricityLiejimas),
    momentPowerRepository: db.getRepository(MomentPowerLiejimas),
  },
  {
    name: 'Kompesorine',
    ip: 'http://10.0.7.132',
    totalElectricityRepository: db.getRepository(TotalElectricityKompresorine),
    momentPowerRepository: db.getRepository(MomentPowerKompresorine),
  },
  {
    name: 'MAC',
    ip: 'http://10.0.7.133',
    totalElectricityRepository: db.getRepository(TotalElectricityMAC),
    momentPowerRepository: db.getRepository(MomentPowerMAC),
  },
  {
    name: 'Surinkimas',
    ip: 'http://10.0.7.134',
    totalElectricityRepository: db.getRepository(TotalElectricitySurinkimas),
    momentPowerRepository: db.getRepository(MomentPowerSurinkimas),
  },
  {
    name: 'Linija 1 liejimas CLF 5488',
    ip: 'http://10.0.7.135',
    totalElectricityRepository: db.getRepository(TotalElectricityLinija1Liejimas),
    momentPowerRepository: db.getRepository(MomentPowerLinija1Liejimas),
  },
  {
    name: 'Linija 1 kaitintuvas 5488',
    ip: 'http://10.0.7.136',
    totalElectricityRepository: db.getRepository(TotalElectricityLinija1Kaitintuvas),
    momentPowerRepository: db.getRepository(MomentPowerLinija1Kaitintuvas),
  },
  {
    name: 'Linija 2 liejimas CLF 5489',
    ip: 'http://10.0.7.137',
    totalElectricityRepository: db.getRepository(TotalElectricityLinija2Liejimas),
    momentPowerRepository: db.getRepository(MomentPowerLinija2Liejimas),
  },
  {
    name: 'Linija 2 kaitintuvas 5489',
    ip: 'http://10.0.7.138',
    totalElectricityRepository: db.getRepository(TotalElectricityLinija2Kaitintuvas),
    momentPowerRepository: db.getRepository(MomentPowerLinija2Kaitintuvas),
  },
  {
    name: 'Linija 3 liejimas CLF 5489',
    ip: 'http://10.0.7.139',
    totalElectricityRepository: db.getRepository(TotalElectricityLinija3Liejimas),
    momentPowerRepository: db.getRepository(MomentPowerLinija3Liejimas),
  },
  {
    name: 'Linija 3 kaitintuvas 5489',
    ip: 'http://10.0.7.140',
    totalElectricityRepository: db.getRepository(TotalElectricityLinija3Kaitintuvas),
    momentPowerRepository: db.getRepository(MomentPowerLinija3Kaitintuvas),
  },
];

export default consoles;