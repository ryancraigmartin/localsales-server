import { User } from '../Entities/User/User.model'
import { AddUserInput } from '../Entities/User/User.inputs'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { getRepository } from 'typeorm'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  allUsers(): Promise<User[]> {
    return getRepository(User).find()
  }

  @Query(() => User, { nullable: true })
  userById(@Arg('userUUID', () => String) userUUID: string): Promise<User | undefined> {
    return getRepository(User)
      .findOne({
        where: {
            userUUID: userUUID,
          },
        })
  }

  @Mutation(() => User)
  async addUser(@Arg('data') userData: AddUserInput): Promise<User | Error> {
    try {
      const user = getRepository(User).create({
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
