import "reflect-metadata";
import {
  Entity,
  Column,
  BeforeInsert,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { UserInformation } from "./UserInformation";
import * as bcrypt from "bcrypt";
import { Notification } from "./Notification";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column("text")
  userRole!: string;

  @Column("text")
  email!: string;

  @Column("text")
  password!: string;

  @Column("boolean", { default: false })
  emailVerified!: boolean;

  @OneToOne(() => UserInformation, (userinformation) => userinformation.user)
  @JoinColumn()
  userInformation: UserInformation;

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @Column("text", { default: new Date().toISOString() })
  createdAt!: string;

  @Column("text", { default: new Date().toISOString() })
  updatedAt!: string;

  @BeforeInsert()
  async function() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
