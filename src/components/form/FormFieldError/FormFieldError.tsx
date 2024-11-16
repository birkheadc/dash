import { FieldError } from "react-hook-form";

type FormFieldErrorProps = {
  error: FieldError | undefined;
};

function FormFieldError({ error }: FormFieldErrorProps): JSX.Element | null {
  if (error === undefined) return null;

  return (
    <div className="text-sm text-error-500 dark:text-error-300">
      {error.message}
    </div>
  );
}

export default FormFieldError;
