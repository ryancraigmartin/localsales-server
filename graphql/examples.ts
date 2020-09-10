import { gql } from 'apollo-server-express'

//? User
export const userById = gql`
  query {
    userById(userUUID: "a4053067-6cd4-4086-ae90-fbe1d20a7e05") {
      id
      userUUID
      username
      password
      email
    }
  }
`

export const addUser = gql`
  mutation {
    addUser(data: { username: "ryan", password: "pass", email: "email@email.com" }) {
      id
      userUUID
      username
      email
      password
      firstName
      lastName
      nickname
      bio
      location
      createdAt
    }
  }
`

//? Listing
export const allListings = gql`
  query {
    allListings {
      listingUUID
      title
      description
      condition
    }
  }
`

export const listingById = gql`
  query {
    listingById(listingUUID: "c86a8bf3-6a68-480c-8093-36a11d23b2aa") {
      id
      listingUUID
      title
      description
      condition
    }
  }
`
