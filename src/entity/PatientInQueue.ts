import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Patient } from "./Patient";
import { Queue } from "./Queue";

@Entity("patient_in_queue")
export class PatientInQueue extends BaseEntity {
  @PrimaryGeneratedColumn()
  number: number;

  @ManyToOne(() => Queue, (queue) => queue.queue)
  queue: Queue;

  @OneToOne(() => Patient)
  @JoinColumn()
  patient: Patient;

  @Column("boolean", { default: false })
  isAccepted!: boolean;

  @Column("boolean", { default: false })
  isDone!: boolean;

  @Column("text", { default: new Date().toISOString() })
  createdAt!: string;

  @Column("text", { default: new Date().toISOString() })
  updatedAt!: string;
}
