import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "total_electricity" })
export class TotalElectricity {
  @Index(['time', 'name'], { unique: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
	time: Date;

	@Column()
	name: string;

	@Column({ type: "decimal", precision: 12, scale: 2, nullable: true })
	total: number;
}
