import { createServer } from "@graphql-yoga/node";
import { schema } from "./schema";

// Provide your schema
const server = createServer({
  graphiql: false,
  schema,
});

// Start the server and explore http://localhost:4000/graphql
server.start();
