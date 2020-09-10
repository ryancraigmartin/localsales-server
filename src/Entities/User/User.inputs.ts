import { User } from './User.model';
import { InputType, Field } from "type-graphql"
User

@InputType({description: "Input needed to create a new user."})
export class AddUserInput implements Partial<User> {

  @Field({ nullable: false })
  username: string

  @Field({ nullable: false })
  email: string

  @Field({ nullable: false })
  password: string

}