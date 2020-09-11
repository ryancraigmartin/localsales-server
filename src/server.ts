import 'reflect-metadata'
import * as express from 'express'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
const resolvers = require('./Resolvers/index')
const entities = require('./Entities/index')

const startServer = async () => {
  // Build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers,
    validate: false,
  })

  // Create server with TypeGraphQL schema
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
    }),
  })

  // Connect to PG DB
  await createConnection({
    type: 'postgres',
    database: 'localsales',
    username: 'ryan',
    password: 'postgres',
    port: 5432,
    logging: true,
    synchronize: true,
    entities,
  })

  const app = express()

  // Creates our GQL endpoint on Express
  server.applyMiddleware({ app })

  app.listen({ port: 9999 }, () =>
    console.log(`🚀 Server ready at http://localhost:9999${server.graphqlPath}`),
  )
}

startServer().catch(err => {
  console.error(err)
})
