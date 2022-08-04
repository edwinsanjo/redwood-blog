export const schema = gql`
  type Post {
    id: Int
    title: String!
    content: String!
    authorId: String!
    createdAt: DateTime
  }

  type user {
    name: String!
  }

  type Query {
    post(id: Int!): Post @skipAuth
    posts: [Post!]! @skipAuth
  }

  input createPost {
    id: Int
    title: String
    content: String
    authorId: String
  }

  input updatePost {
    id: Int
    title: String
    content: String
    authorId: String
  }

  input deletePost {
    id: Int
  }

  type Mutation {
    createPost(title: String!, content: String!, authorId: String!): Post @requireAuth
    updatePost(id: Int!, title: String!, content: String!): Post @requireAuth
    deletePost(id: Int!): Post @requireAuth
  }
`
