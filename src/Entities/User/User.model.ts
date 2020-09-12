import { Listing } from './../Listing/Listing.model'
import { v4 as uuidv4 } from 'uuid'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column('varchar', { length: 40, unique: true })
  username!: string

  @Field()
  @Column('varchar', { length: 75, unique: true })
  email!: string

  @Field()
  @Column('varchar', { length: 25 })
  password!: string

  @Field({ nullable: true })
  @Column('varchar', { length: 25, nullable: true })
  firstName?: string

  @Field({ nullable: true })
  @Column('varchar', { length: 25, nullable: true })
  lastName?: string

  @Field({ nullable: true })
  @Column('varchar', { length: 40, nullable: true })
  nickname?: string

  @Field({ nullable: true })
  @Column('text', { nullable: true })
  bio?: string

  @Field({ nullable: true })
  @Column('varchar', { length: 75, nullable: true })
  location?: string

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date

  listings?: [Listing];

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

  @BeforeInsert()
  addUUID(): string {
    return (this.id = uuidv4())
  }
}
