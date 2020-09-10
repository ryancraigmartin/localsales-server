import { v4 as uuidv4 } from 'uuid'
import { User, AddUserInput } from '../Entities/User/User.model'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  allUsers(): Promise<User[]> {
    return User.find()
  }

  @Query(() => User, { nullable: true })
  userById(@Arg('userUUID', () => String) userUUID: string): Promise<User | undefined> {
    return User.findOne({ where: { userUUID: userUUID } })
  }

  @Mutation(() => User)
  async addUser(@Arg('data') userData: AddUserInput): Promise<User | undefined> {
    try {
      const user = User.create({
        userUUID: uuidv4(),
        ...userData,
      })
      console.log(user)
      await user.save()
      return user
    } catch (error) {
      return error
    }
  }
}
