import { useMutation } from "@tanstack/react-query";
import { ApiError } from "../../types/apiResult/apiError";
import { useRefreshToast } from "../useRefreshToast/useRefreshToast";
import { useKeyedTranslation } from "../useKeyedTranslation/useKeyedTranslation";

type UseToastMutationOptions<T> = {
  toastId: string;
  fn: (data: T) => Promise<void>;
  successCallback?: () => void;
  errorCallback?: (error: ApiError) => void;
  successMessage?: string;
};

/**
 * Creates a fire-and-forget mutation that creates toast notifactions for success or failure.
 * Optional callbacks can be provided for additional functionality.
 */
export function useToastMutation<T>({
  toastId,
  fn,
  successCallback,
  errorCallback,
  successMessage,
}: UseToastMutationOptions<T>) {
  const { t } = useKeyedTranslation("components.form");

  const toast = useRefreshToast(toastId);

  const mutationFn = async (data: T) => {
    toast("submit", "info", true);
    await fn(data);
  };

  const onError = (error: ApiError) => {
    if (error.errorCode) {
      toast(t(`errorCode.${error.errorCode}`), "error");
    } else {
      toast(t(`status.${error.status}`), "error");
    }
    errorCallback?.(error);
  };

  const onSuccess = () => {
    toast(successMessage ?? "success", "success");
    successCallback?.();
  };

  return useMutation({
    mutationFn,
    onError,
    onSuccess,
  });
}
