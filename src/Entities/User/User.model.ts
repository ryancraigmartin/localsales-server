// import { Listing } from './../Listing/Listing.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  userUUID!: string

  @Field()
  @Column({ unique: true })
  username!: string

  @Field()
  @Column({ unique: true })
  email!: string

  @Field()
  @Column()
  password!: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  nickname?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  bio?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  location?: string

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date

  // @Field()
  // @Column()
  // listings?: [Listing];

  // @Field()
  // @Column()
  // lookingFor?: string;

  // @Field()
  // @Column()
  // tradingFor?: string;

  // @Field()
  // @Column()
  // tags?: [Tags];

  // @Field()
  // @Column()
  // reviews?: [reviews];

  // @Field()
  // @Column()
  // reputation?: Reputation;
}
