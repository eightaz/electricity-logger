import { Entity, PrimaryColumn, Column } from "typeorm";
import { MomentPowerSingle } from "./Abstract";

@Entity({ name: 'surinkimas_moment_power' })
export class MomentPowerSurinkimas implements MomentPowerSingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  power: number;
}
