import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Planos {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: false })
  nome_plano!: string;

  @Column({ type: 'text', nullable: false })
  minutos!: number;
  
  @Column({ type: 'boolean'})
  status!: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date?: string;
}
