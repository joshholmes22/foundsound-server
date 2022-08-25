const { gql } = require("apollo-server");

const typeDefs = gql`
  type Address {
    _id: ID!
    formatted_address: [String]
    thoroughfare: String
    building_name: String
    sub_building_name: String
    sub_building_number: String
    building_number: String
    line_1: String
    line_2: String
    line_3: String
    line_4: String
    locality: String
    town_or_city: String
    county: String
    district: String
    country: String
    fullAddress: String
  }
  type Venue {
    address: Address!
    capacity: [String]
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    imageUrl: String!
    userType: String!
  }
  type SignupSuccess {
    success: Boolean!
  }
  type LoginSuccess {
    success: Boolean!
    token: String!
    user: User!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input SignupInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    imageUrl: String!
    userType: String!
    address: ID!
  }
  type Query {
    addressLookup(postcode: String!): AddressLookup
  }
  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
  }
`;

module.exports = typeDefs;