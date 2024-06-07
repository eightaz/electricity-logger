import { Entity, PrimaryColumn, Column } from "typeorm";
import { MomentPowerSingle } from "./Abstract";

@Entity({ name: 'linija_2_kaitintuvas_moment_power' })
export class MomentPowerLinija2Kaitintuvas implements MomentPowerSingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  power: number;
}
