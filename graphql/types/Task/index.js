import gql from "graphql-tag";

export default gql`
    type Task {
        _id: String!
        content: String!
        description: String!
        completed: Boolean!
    }
  
  type Query {
      tasks: [Task!]!
  }
  
  type Mutation {
      createTask(task: CreateTaskInput): Task!
  }
  
  input CreateTaskInput {
      content: String!
      description: String!
      completed: Boolean!
  }
`;
