import { ReviewScore } from './Review.enums'
// import { User } from '../User/User.model';
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
export class Review extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  reviewUUID!: string

  // @Field()
  // @Column({ unique: true })
  // postingUser!: User;

  // @Field()
  // @Column({ unique: true })
  // reviewedUser!: User;

  @Field()
  @Column()
  title!: string

  // TODO implement content as a separate type to include comments and photos.
  @Field()
  @Column()
  content!: string

  @Field()
  @Column()
  score!: ReviewScore

  // @Field()
  // @Column()
  // photos!: [Photo];

  // @Field()
  // @Column()
  // tags!: [Tag];

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
