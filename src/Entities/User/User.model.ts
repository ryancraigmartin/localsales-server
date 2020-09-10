// import { Listing } from './../Listing/Listing.model';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import { InputType, Field, ObjectType, ID } from "type-graphql"

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  uuid!: string;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field()
  @Column()
  firstName?: string;

  @Field()
  @Column()
  lastName?: string;

  @Field()
  @Column()
  nickname?: string;

  @Field()
  @Column()
  bio?: string;

  @Field()
  @Column()
  location?: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

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

@InputType({description: "Input needed to create a new user."})
export class AddUserInput implements Partial<User> {
  @Field({ nullable: false })
  username: string
  @Field({ nullable: false })
  email: string
  @Field({ nullable: false })
  password: string
}