import { User } from './User.model'
import { InputType, Field } from 'type-graphql'

@InputType({ description: 'Input needed to create a new user.' })
export class AddUserInput implements Partial<User> {
  @Field()
  username!: string

  @Field()
  email!: string

  @Field()
  password!: string
}
