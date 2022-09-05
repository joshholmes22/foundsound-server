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
  type AddressResponse {
    postcode: String
    latitude: String
    longitude: String
    addresses: [Address]
  }
  type Venue {
    address: Address!
    capacity: [String]
    facilities: String!
  }
  type Tag {
    name: String!
  }
  type EventResponse {
    name: String
    description: String
    startDateTime: String
    endDateTime: String
    venues: [Venue]
    imageUrl: String
    tags: [Tag]
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    imageUrl: String
    socialMedia: String
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
    imageUrl: String
    socialMedia: String
    userType: String!
    address: ID
  }

  input EventInput {
    name: String!
    description: String!
    startDateTime: String!
    endDateTime: String!
    venue: ID!
    imageUrl: String!
    tags: [ID]
  }
  type Query {
    addressLookup(postcode: String!): AddressResponse
  }
  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    createEvent(eventInput: EventInput!): EventResponse
  }
`;

module.exports = typeDefs;
