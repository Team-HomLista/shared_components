import { z } from "zod";

export const schema = z.object({
  email: z.email().nonempty(),
  password: z.string().nonempty()
});

export type Schema = z.infer<typeof schema>;
