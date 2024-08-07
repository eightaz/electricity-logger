import { Entity, PrimaryColumn, Column } from "typeorm";
import { MomentPowerSingle } from "./Abstract";

@Entity({ name: 'linija_1_liejimas_moment_power' })
export class MomentPowerLinija1Liejimas implements MomentPowerSingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  power: number;
}
