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

  input TicketUpdateInput {
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

  input VenueInput {
    address: Address!
    capacity: [String]
    facilities: String!
  }
// not sure if this is correct?
  
  type VenueSuccess {
    success: Boolean!
  }
  type Ticket{
    hasPrice
    noOfTickets
    bandShare
    fixedRate
  }

  type CreateSuccess {
    success: Boolean!
    ticket: Ticket
  }

  type DeleteSuccess {
    success: Boolean!
    ticket: Ticket
  }

  type UpdateSuccess {
    success: Boolean!
    ticket: Ticket
  }

  type Query {
    addressLookup(postcode: String!): AddressResponse
  }
  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    createVenue(venueInput: VenueInput!): VenueSuccess
    createTicket(input: TicketUpdateInput): CreateSuccess
    deleteTicket(id: ID!): DeleteSuccess
    updateTicket(input: TicketUpdateInput, id: ID!): UpdateSuccess
  }
`;

module.exports = typeDefs;
