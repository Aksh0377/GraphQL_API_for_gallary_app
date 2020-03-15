const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        Photos: [Photos]!
      }

    type Photos {
        id: Int!
        url: String!
    }

    type Query {
        user(id: Int!): User
        allPhotos: [Photos!]!
        allUsers: [User!]!
        photos(id: Int!): Photos
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createPhotos(
          userId: Int!
          url: String!
        ): Photos!
        login(
            email: String!
            password: String!
          ): User!
          allUserPhotos(
            userId: Int!
          ): [Photos]!  
    }
`

module.exports = typeDefs