import { TFunction } from "i18next";
import z from "zod";

export const passwordChecks = [
  {
    label: (t: TFunction) => t("register.passwordChecks.atLeastNCharacters", { n: 8 }),
    validate: (password: string) => password.length >= 8
  },
  {
    label: (t: TFunction) => t("register.passwordChecks.atLeastNNumber", { n: 1 }),
    validate: (password: string) => /\d/.test(password)
  },
  {
    label: (t: TFunction) => t("register.passwordChecks.atLeastNSpecialCharacter", { n: 1 }),
    validate: (password: string) => /[\W_]/.test(password)
  },
  {
    label: (t: TFunction) => t("register.passwordChecks.atLeastNUppercaseLetter", { n: 1 }),
    validate: (password: string) => /[A-Z]/.test(password)
  }
];

export const schema = z.object({
  email: z.email().nonempty(),
  password: z.stringFormat("password", (val: string) =>
    passwordChecks.every(({ validate }) => validate(val))
  )
});
