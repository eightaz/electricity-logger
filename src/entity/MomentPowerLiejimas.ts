import { Column, Entity, PrimaryColumn } from "typeorm";
import { MomentPowerSingle } from "./Abstract";

@Entity({ name: 'liejimas_moment_power' })
export class MomentPowerLiejimas implements MomentPowerSingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  power: number;
}
