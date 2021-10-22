import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Origemdestino {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: false })
  origem!: string;

  @Column({ type: 'text', nullable: false })
  destino!: string;

  @Column({ type: 'double', nullable: false })
  custo_minutos_com_plano!: number;

  @Column({ type: 'double', nullable: false })
  custo_minutos_sem_plano!: number;

  @Column({ type: 'double', nullable: false })
  custo_excedente!: number;
  
  @Column({ type: 'boolean'})
  status!: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date?: string;
}
