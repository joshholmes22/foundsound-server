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

  type Tag {
    name: String!
  }

  type Event {
    id: ID!
    name: String!
    description: String!
    address: Address!
    postcode: String!
    startDate: String!
    endDate: String!
    startTime: String!
    endTime: String!
    imageUrl: String
    tags: [Tag]
    adverts: [Advert]
    eventOwner: User
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

  input CreateEventInput {
    name: String!
    description: String!
    address: ID!
    postcode: String!
    startDate: String!
    endDate: String!
    startTime: String!
    endTime: String!
    facilities: [String]
    capacity: String
    imageUrl: String
    tags: [inputTag]
  }

  type DeleteEventSuccess {
    success: Boolean!
  }

  type Advert {
    event: ID!
    isPaid: Boolean!
    expires: String!
  }

  input inputTag {
    name: String!
  }

  input inputEvent {
    name: String!
    description: String!
    startDate: String!
    endDate: String!
    time: String!
    imageUrl: String
    postcode: String
    tags: [inputTag]
    price: Float
  }

  input CreateAdvertInput {
    event: ID!
    isPaid: Boolean!
    expires: String!
  }

  type CreateAdSuccess {
    success: Boolean!
  }

  type Query {
    addressLookup(postcode: String!): AddressResponse
    getAllEvents: [Event]
    getAllEventsForOwner: (eventOwner:ID!): Event
    getAnEvent(eventId: ID!): Event
  }

  type Mutation {
    login(loginInput: LoginInput!): LoginSuccess
    signup(signupInput: SignupInput!): SignupSuccess
    createEvent(createEventInput: CreateEventInput!): Event
    createAdvert(createAdvertInput: CreateAdvertInput!): Event
  }
`;

module.exports = typeDefs;
