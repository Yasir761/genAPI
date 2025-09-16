import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const httpServer = http.createServer(app); // ✅ needed for Apollo v4
const PORT = process.env.PORT || 4000;

// ✅ Add drain plugin for proper shutdown
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async () => ({}), // 🔑 add auth/db context later
  })
);

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
console.log(`🚀 GraphQL server ready at http://localhost:${PORT}/graphql`);
