import { TypeOf, z } from "zod";

export const contactSchema = z.object({
    name: z
      .string()
      .min(1, {
        message: "name must not be empty",
      })
      .max(50, {
        message: "name must be at most 50 characters long",
      }),
    email: z
      .string()
      .min(1, {
        message: "email must not be empty",
      })
      .max(50, {
        message: "email must be at most 50 characters long",
      }),
    message: z
      .string()
      .min(1, {
        message: "message must not be empty",
      })
      .max(200, {
        message: "message must be at most 200 characters long",
      }),
  });

export type Contact = z.infer<typeof contactSchema>