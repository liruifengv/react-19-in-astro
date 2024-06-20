import { defineAction, z } from "astro:actions";

export const server = {
  updateName: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
    }),
    handler: async ({ name }) => {
      console.log(`Received name: ${name}`);
      return name;
    },
  }),
};