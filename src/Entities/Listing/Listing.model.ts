import { User } from './../User/User.model'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  BeforeInsert,
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
import { Condition } from './Listing.enums'

@ObjectType()
@Entity()
export class Listing extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column('varchar', { length: 75 })
  title!: string

  @Field()
  @Column('varchar', { length: 75 })
  description!: string

  @Field()
  @Column()
  condition!: Condition

  @ManyToOne(() => User, user => user.listings)
  user!: User

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date

  // @Field()
  // @Column()
  // expires?: Date;

  // @Field()
  // @Column()
  // photos?: [Photo];

  // @Field()
  // @Column()
  // tags?: [Tags];

  // @Field()
  // @Column()
  // relatedListings?: [Listing];

  @Field()
  @Column({ default: false })
  isActive: boolean

  @Field()
  @Column({ default: false })
  isPromoted: boolean

  @BeforeInsert()
  setInitialAttributes(): boolean {
    return (this.isActive = false) && (this.isPromoted = false)
  }
}
