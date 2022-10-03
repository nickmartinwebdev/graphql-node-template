import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin from "@pothos/plugin-relay";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import { DateTimeResolver } from "graphql-scalars";

import type PrismaTypes from "@pothos/plugin-prisma/generated";

import { db } from "../db";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [PrismaPlugin, RelayPlugin, SimpleObjectsPlugin],
  prisma: {
    client: db.prisma,
  },
  relayOptions: {
    clientMutationId: "omit",
    cursorType: "String",
  },
});

builder.addScalarType("Date", DateTimeResolver, {});
