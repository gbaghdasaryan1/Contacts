import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty("Name is required"),
  userName: z.string().nonempty("Username is required"),
  phone: z.string().nonempty("Phone number is required"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>