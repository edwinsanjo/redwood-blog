export const schema = gql`
  type User {
    id: String!
    name: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    createdAt: DateTime!
    post: [Post]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
