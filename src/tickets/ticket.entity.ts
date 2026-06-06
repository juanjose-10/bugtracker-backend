import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  prioridad: string;

  @Column()
  estado: string;

  @Column()
  usuario: string;

  @Column({ nullable: true })
  asignadoA: string;
}