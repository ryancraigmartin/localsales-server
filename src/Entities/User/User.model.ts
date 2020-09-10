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
  user_uuid!: string;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => Listing, (listing) => listing.user)
  // listings: Listing[];
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