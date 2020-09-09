import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { User } from "./entities/User"
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await createConnection({
    type: 'postgres',
    database: 'localsales',
    username: 'ryan',
    password: 'postgres',
    port: 5432,
    logging: true,
    synchronize: true,
    entities: [User]
  });

  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 9999 }, () =>
    console.log(`🚀 Server ready at http://localhost:9999${server.graphqlPath}`)
  );
};

startServer();