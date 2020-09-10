import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import { Field, ObjectType, ID } from "type-graphql"
import { Condition } from './Listing.enums';

@ObjectType()
@Entity()
export class Listing extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  listing_uuid!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  condition!: Condition;

  // @Field()
  // @Column()
  // expires?: Date;

  // @Field()
  // @Column()
  // photos?: [string];

  // @Field()
  // @Column()
  // tags?: [string];

  // @Field()
  // @Column()
  // relatedListings?: [Listing];

  // @Field()
  // @Column()
  // isPromoted?: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}