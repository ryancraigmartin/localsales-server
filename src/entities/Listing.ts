// import {ObjectType, Field} from "type-graphql"
// import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

// @ObjectType()
// @Entity()
// export class Listing {
//   @Field()
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Field(() => String)
//   @CreateDateColumn()
//   createdAt: Date;

//   @Field(() => String)
//   @UpdateDateColumn()
//   updatedAt: Date;

//   @Field()
//   @Column()
//   title!: string;

//   @Field()
//   @Column()
//   description!: string;
// }