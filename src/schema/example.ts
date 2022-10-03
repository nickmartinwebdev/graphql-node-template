import { builder } from "./builder";

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => "Hello World!",
    }),
    currentTime: t.field({ type: "Date", resolve: () => new Date() }),
  }),
});
