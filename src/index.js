require("dotenv").config();

const { ApolloServer } = require("apollo-server");

const connectToDatabase = require("./config/connection");
//UNCOMMENT WHEN EACH FOLDER IS SET UP
// const typeDefs = require("./typeDefs");
// const resolvers = require("./resolvers");
// const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 4000;

const init = async () => {
  try {
    // establish a connection with database
    await connectToDatabase();

    //UNCOMMENT WHEN THE SERVER IS READY
    // // create a graphQL server
    // const server = new ApolloServer({
    //   typeDefs,
    //   resolvers,
    //   context: authMiddleware,
    // });

    // // start your graphQL server
    // const { url } = await server.listen(PORT);
    // console.log(`Server running on ${url}`);
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
