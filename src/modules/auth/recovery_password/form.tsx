import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import z from "zod";

import { Button, Form } from "@/components/ui";

const schema = z.object({
  email: z.email()
});

export function RecoveryPasswordForm() {
  const { t } = useTranslation("auth");

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched"
  });

  const handleSubmit = () => {};

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <Form.Input
          control={form.control}
          type="email"
          name="email"
          title={t("recovery_password.fields.email")}
        />
        <Button type="submit" disabled={!form.formState.isDirty || !form.formState.isValid}>
          {t("recovery_password.submitBtn")}
        </Button>
      </form>
    </Form>
  );
}
