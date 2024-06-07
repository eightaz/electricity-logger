import { Column, Entity, PrimaryColumn } from "typeorm";
import { TotalElectricitySingle } from "./Abstract";

@Entity({ name: 'linija_1_liejimas_total_electricity' })
export class TotalElectricityLinija1Liejimas implements TotalElectricitySingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  total: number;
}
