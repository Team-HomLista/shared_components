import { z } from "zod";

import { schema as accountSchema } from "@/modules/auth/register/account/schema";

export const schema = z.object({
  ...accountSchema.shape,
  agencyName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  addressLine: z.string(),
  state: z.string(),
  phoneCode: z.string().default("52"),
  phoneNumber: z.string(),
  phoneExt: z.string()
});

export type Schema = z.infer<typeof schema>;
