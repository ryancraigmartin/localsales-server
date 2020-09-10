import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'
import { Field, ObjectType, ID } from 'type-graphql'
import { Condition } from './Listing.enums'

@ObjectType()
@Entity()
export class Listing extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  listingUUID!: string

  @Field()
  @Column()
  title!: string

  @Field()
  @Column()
  description!: string

  @Field()
  @Column()
  condition!: Condition

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

  // @Field()
  // @Column()
  // isPromoted?: boolean;
}
