import {ApolloServer, PubSub} from "apollo-server";

require("dotenv").config();
import mongoose from "mongoose";

import schema from "../graphql/index";
import { models } from "./config/db/index";

const { mongoURI: db } = process.env;

const pubsub = new PubSub();

const options = {
  port: process.env.PORT || "4000",
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

const context = {
  models,
  pubsub
};

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log(err));

const server = new ApolloServer({
  schema,
  context
});

server.listen(options)
  .then(({ url }) => {
    console.log(`Server is running on ${url}`)
  });
