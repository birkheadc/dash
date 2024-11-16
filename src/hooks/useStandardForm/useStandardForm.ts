import { UseMutationResult } from "@tanstack/react-query";
import {
  DefaultValues,
  FieldValues,
  Path,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import {
  UseRefreshToastReturn,
  useRefreshToast,
} from "../useRefreshToast/useRefreshToast";
import { z } from "zod";
import { ApiError } from "../../types/apiResult/apiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToastMutation } from "../useToastMutation/useToastMutation";

export type UseStandardFormReturn<TSchema extends FieldValues> = {
  form: UseFormReturn<TSchema>;
  mutation: UseMutationResult<void, ApiError, TSchema>;
  toast: UseRefreshToastReturn;
};

export type UseStandardFormOptions<TSchema extends FieldValues> = {
  title: string;
  schema: z.ZodType<TSchema>;
  defaultValues: DefaultValues<TSchema>;
  submitFn: (data: TSchema) => Promise<void>;
  successMessage?: string;
  successCallback?: () => void;
};

/**
 * To be used with the <StandardForm> component for creating standardized forms.
 * Handles errors, submission, and success toast notifications.
 */
export function useStandardForm<TSchema extends FieldValues>({
  title,
  schema,
  defaultValues,
  submitFn,
  successMessage,
  successCallback,
}: UseStandardFormOptions<TSchema>): UseStandardFormReturn<TSchema> {
  const toast = useRefreshToast(title);

  const form = useForm<TSchema>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const mutationFn = async (data: TSchema) => {
    toast("submit", "info", true);
    await submitFn(data);
  };

  const errorCallback = (error: ApiError) => {
    for (const key of Object.keys(defaultValues)) {
      if (error.validationErrors[key]) {
        form.setError(key as Path<TSchema>, {
          message: error.validationErrors[key],
        });
      }
    }
  };

  const mutation = useToastMutation<TSchema>({
    toastId: title,
    fn: mutationFn,
    successCallback,
    errorCallback,
    successMessage,
  });

  return {
    form,
    mutation,
    toast,
  };
}
