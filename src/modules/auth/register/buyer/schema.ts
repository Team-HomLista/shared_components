import { z } from "zod";

import { schema as accountSchema } from "@/modules/auth/register/account/schema";

export const schema = z.object({
  ...accountSchema.shape,
  firstName: z.string(),
  lastName: z.string(),
  phoneCode: z.string(),
  phoneNumber: z.string().default("52")
});

export type Schema = z.infer<typeof schema>;
