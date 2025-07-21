import { cn } from "@shared/lib/utils";
import { useFormField } from "@shared/components/ui/form/hooks/use-form-field";
import { useController } from "react-hook-form";

export function DisplayErrorMessage({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-destructive text-sm group-[.hide-error-message]:hidden",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
interface ErrorMessageProps extends React.ComponentProps<"p"> {
  name: string;
}

export function ErrorMessage({ name, ...props }: ErrorMessageProps) {
  const { fieldState } = useController({ name });

  if (!fieldState.error) {
    return null;
  }

  return (
    <DisplayErrorMessage {...props}>
      {fieldState.error.message}
    </DisplayErrorMessage>
  );
}

export function FormMessage(props: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <DisplayErrorMessage data-slot="form-message" id={formMessageId} {...props}>
      {body}
    </DisplayErrorMessage>
  );
}

interface FormMultiFormMessageProps extends React.ComponentProps<"p"> {
  names: string[];
}

export function FormMultiFormMessage({
  names,
  ...props
}: FormMultiFormMessageProps) {
  return (
    <div>
      {names.map((name) => (
        <ErrorMessage key={name} name={name} {...props} />
      ))}
    </div>
  );
}

export function FormHideErrorMessage({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("group hide-error-message", className)} {...props}>
      {children}
    </div>
  );
}
