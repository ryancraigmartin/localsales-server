import 'reflect-metadata'
import * as express from 'express'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
const resolvers = require('./Resolvers/index')
const entities = require('./Entities/index')

const startServer = async () => {
  try {
    // Build TypeGraphQL executable schema
    const schema = await buildSchema({ resolvers })

    // Create server with TypeGraphQL schema
    const server = new ApolloServer({ schema })

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

    server.applyMiddleware({ app })

    app.listen({ port: 9999 }, () =>
      console.log(`🚀 Server ready at http://localhost:9999${server.graphqlPath}`),
      )
    } catch (e) {
    console.error(e)
    throw e
  }
}

startServer()
