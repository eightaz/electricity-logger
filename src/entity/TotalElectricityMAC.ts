import { Column, Entity, PrimaryColumn } from "typeorm";
import { TotalElectricitySingle } from "./Abstract";

@Entity({ name: 'mac_total_electricity' })
export class TotalElectricityMAC implements TotalElectricitySingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  total: number;
}
