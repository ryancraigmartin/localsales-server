import { AddUserInput } from '../Inputs/User.inputs';
import { v4 as uuidv4 } from 'uuid';
import { User } from "../Models/User.model";
import { Resolver, Query, Mutation, Arg} from "type-graphql"

@Resolver()
export class UserResolver {
  @Query(() => [User])
  allUsers() {
    return User.find()
  }

  @Query(() => User, { nullable: true })
  getUserById(@Arg("ID", () => String) ID: String) {
    return User.findOne({ where: { ID: ID } })
  }

  @Mutation(() => User)
  async addUser(@Arg("data") {username, password, email}: AddUserInput) {
      try {
        const user = User.create({
          uuid: uuidv4(),
          username,
          password,
          email,
        });
        console.log(user);
        await user.save();
        return user;
      } catch (error) {
        return error;
      }
  }
}