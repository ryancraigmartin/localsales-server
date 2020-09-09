import { User } from "./entities/User";

export const resolvers = {
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;

      return await User.findOne({ where: { id: id } });
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const { username, email, password } = args;
      try {
        const user = User.create({
          username,
          email,
          password
        });

        await user.save();

        return true;
      } catch (error) {
        return false;
      }
    }
  }
};