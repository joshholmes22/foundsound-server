const { gql } = require("apollo-server");

const typeDefs = gql`
  input AddressInput {
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
  type Tag {
    name: String!
  }
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
  type Event {
    id: ID!
    name: String!
    description: String!
    startDate: String!
    endDate: String!
    time: String!
    venue: Venue!
    imageUrl: String
    postcode: String
    tags: [Tag]
    price: Float
  }
  type Venue {
    address: Address!
    capacity: String
    facilities: String!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    imageUrl: String
    imageFileName: String!
    socialMedia: String
    userType: String!
  }
  type EventOrganiser {
    user: ID
    venue: ID
    verificationCode: String
  }
  type Artist {
    name: String
    user: ID
    demoSong: String
    tag: ID
    rider: String
  }
  type AudienceMember {
    user: ID
    booking: [String]
    favouriteArtists: String
    favouriteEvents: String
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
    imageFileName: String
    socialMedia: String
    userType: String!
  }
  input DeleteEventInput {
    id: ID!
  }
  input VenueInput {
    address: AddressInput!
    capacity: String!
    facilities: String!
    userType: String!
    _id: ID!
  }
  input CreateEventInput {
    name: String!
    description: String!
    startDate: String!
    endDate: String!
    time: String!
    venue: ID!
    postcode: String
    imageUrl: String
    tags: [ID]
  }
  type VenueSuccess {
    success: Boolean!
  }
  type DeleteEventSuccess {
    success: Boolean!
  }

  type Ad {
    event: Event!
    isPaid: Boolean!
    expires: String!
  }

  input inputTag {
    name: String!
  }

  input inputEvent {
    id: ID!
    name: String!
    description: String!
    startDate: String!
    endDate: String!
    time: String!
    venue: VenueInput!
    imageUrl: String
    postcode: String
    tags: [inputTag]
    price: Float
  }

  input CreateAd {
    event: inputEvent!
    isPaid: Boolean!
    expires: String!
  }

  type CreateAdSuccess {
    success: Boolean!
  }

  type Query {
    addressLookup(postcode: String!): AddressResponse
  }
  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    createVenue(venueInput: VenueInput!): VenueSuccess
    deleteEvent(input: DeleteEventInput!): DeleteEventSuccess
    createEvent(createEventInput: CreateEventInput!): Event
    createAd(createAd: CreateAd!): CreateAdSuccess
  }
`;

module.exports = typeDefs;
