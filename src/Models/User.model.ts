// import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import { Field, ObjectType, ID } from "type-graphql"

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

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => Listing, (listing) => listing.user)
  // listings: Listing[];
}