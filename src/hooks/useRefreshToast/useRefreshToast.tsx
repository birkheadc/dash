import { LoaderCircleIcon } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

export type UseRefreshToastReturn = (
  content: React.ReactNode,
  type: "info" | "success" | "warning" | "error" | "default",
  wait?: boolean
) => void;

export function useRefreshToast(toastId?: string): UseRefreshToastReturn {
  const refreshToast = (
    content: React.ReactNode,
    type: "info" | "success" | "warning" | "error" | "default",
    wait?: boolean
  ) => {
    if (toastId && toast.isActive(toastId)) {
      toast.update(toastId, {
        render: content,
        type,
        autoClose: wait ? false : undefined,
        icon: wait ? <LoaderCircleIcon className="animate-spin" /> : undefined,
      });
      return;
    }
    toast(content, {
      type,
      toastId,
      autoClose: wait ? false : undefined,
      icon: wait ? <LoaderCircleIcon className="animate-spin" /> : undefined,
    });
  };

  return refreshToast;
}
