import { v4 as uuidv4 } from 'uuid';
import { User, AddUserInput } from "../Entities/User/User.model";
import { Resolver, Query, Mutation, Arg} from "type-graphql"

@Resolver()
export class UserResolver {
  @Query(() => [User])
  allUsers() {
    return User.find()
  }

  @Query(() => User, { nullable: true })
  userById(@Arg("ID", () => String) ID: String) {
    return User.findOne({ where: { ID: ID } })
  }

  @Mutation(() => User)
  async addUser(@Arg("data") userData: AddUserInput) {
      try {
        const user = User.create({
          uuid: uuidv4(),
          ...userData
        });
        console.log(user);
        await user.save();
        return user;
      } catch (error) {
        return error;
      }
  }
}