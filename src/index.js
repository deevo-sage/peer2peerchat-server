import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
export const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
    subscriptions: {
      path: "/subs",
      onConnect: () => {
        console.log("connected");
      },
      onDisconnect: () => {
        console.log("disconnected");
      },
    },
  });

  server.listen().then(({ url }) => console.log(`server at ${url}`));
};
startServer();
