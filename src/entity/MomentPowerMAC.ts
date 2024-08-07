import { Column, Entity, PrimaryColumn,  } from "typeorm";
import { MomentPowerSingle } from "./Abstract";

@Entity({ name: 'mac_moment_power' })
export class MomentPowerMAC implements MomentPowerSingle {
  @PrimaryColumn({ type: 'timestamptz' })
  time: any;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  power: number;
}