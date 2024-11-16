import { FieldError } from "react-hook-form";
import { FormItemDescription, FormItem, FormLabel } from "../../ui/form";
import FormFieldError from "../FormFieldError/FormFieldError";

type FormItemFormattedProps = {
  label: string;
  description?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

function FormItemFormatted({
  label,
  description,
  children,
  error,
}: FormItemFormattedProps): JSX.Element | null {
  return (
    <FormItem>
      <div className="flex flex-col justify-between w-full gap-16 gap-y-2 md:flex-row md:items-center">
        <div className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          {description && (
            <FormItemDescription>{description}</FormItemDescription>
          )}
        </div>
        <div className="lg:w-[12rem]">{children}</div>
      </div>
      <FormFieldError error={error} />
    </FormItem>
  );
}

export default FormItemFormatted;
