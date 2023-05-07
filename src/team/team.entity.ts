import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';
import { Organisation } from '../organisation/organisation.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'boolean', default: false })
  public private: boolean;

  @ManyToOne(() => User, (user) => user.teams)
  public owner: User;

  @ManyToMany(() => User)
  @JoinTable()
  public members: User[];

  @OneToMany(() => Project, (project) => project.team)
  public projects: Project[];

  @ManyToOne(() => Organisation, (organisation) => organisation.team)
  public organisation: Organisation;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}