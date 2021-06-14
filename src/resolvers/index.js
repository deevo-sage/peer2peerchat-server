import { PubSub, withFilter } from "apollo-server";
const pubSub = new PubSub();
export const resolvers = {
  Query: {
    active: () => {
      return "server active";
    },
  },
  Mutation: {
    message: async (_, { input: { data, username, roomID } }) => {
      console.log(data);
      const message = {
        id: new Date(),
        time: new Date(),
        data,
        username,
        roomID,
      };
      pubSub.publish("NEW_MESSAGE", { message });
      return message;
    },
  },

  Subscription: {
    message: {
      subscribe: withFilter(
        () => pubSub.asyncIterator("NEW_MESSAGE"),
        (payload, vars) => {
          console.log({ payload, vars });
          return payload.message.roomID === vars.roomID;
          //    === vars.roomId;
        }
      ),
    },
  },
};
