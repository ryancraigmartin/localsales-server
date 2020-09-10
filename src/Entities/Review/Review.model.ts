// import { User } from '../User/User.model';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import { Field, ObjectType, ID } from "type-graphql"

@ObjectType()
@Entity()
export class Listing extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  uuid!: string;

  // @Field()
  // @Column({ unique: true })
  // postingUser!: User;

  // @Field()
  // @Column({ unique: true })
  // reviewedUser!: User;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  content!: string;

  // @Field()
  // @Column()
  // tags!: [Tag];

  // @Field()
  // @Column()
  // photos!: [Photo];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

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