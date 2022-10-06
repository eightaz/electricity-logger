import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'moment_power' })
export class MomentPower {
  @Index(['time', 'name'], { unique: true })

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  time: Date;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 12, scale: 3 })
  power: number;
}
