import { Column, Entity, PrimaryColumn } from "typeorm";
import { MomentPowerSingle } from "./Abstract";

@Entity({ name: 'kompresorine_moment_power' })
export class MomentPowerKompresorine implements MomentPowerSingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  power: number;
}
