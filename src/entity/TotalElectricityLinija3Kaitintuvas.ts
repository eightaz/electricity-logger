import { Column, Entity, PrimaryColumn } from "typeorm";
import { TotalElectricitySingle } from "./Abstract";

@Entity({ name: 'linija_3_kaitintuvas_total_electricity' })
export class TotalElectricityLinija3Kaitintuvas implements TotalElectricitySingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  total: number;
}
