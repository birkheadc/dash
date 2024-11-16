import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import i18n from "./localization/i18n";
import { ErrorCodes } from "./types/errorCodes/errorCodes";
import { FormattedMessagePlaceholderValues } from "./types/apiResult/formattedMessagePlaceholderValues";
import config from "./config";
import { ApiError } from "./types/apiResult/apiError";

// Shadcn expects cn to be exported separately
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const extractStatusCode = (json: unknown): number => {
  if (!json) return 422;
  if (typeof json !== "object") return 422;
  if ("status" in json && typeof json.status === "number") return json.status;
  if ("statusCode" in json && typeof json.statusCode === "number")
    return json.statusCode;

  return 422;
};

const extractErrorCode = (json: unknown): string | undefined => {
  if (!json) return undefined;
  if (typeof json !== "object") return undefined;
  if (!("errorCode" in json)) return undefined;
  if (typeof json.errorCode !== "string") return undefined;

  return json.errorCode;
};

const extractValidationErrors = (json: unknown): Record<string, string> => {
  if (!json) return {};
  if (typeof json !== "object") return {};
  if (!("problemDetails" in json)) return {};

  const problemDetails = json.problemDetails;

  if (!problemDetails) return {};
  if (typeof problemDetails !== "object") return {};
  if (!("errors" in problemDetails)) return {};

  const errors = problemDetails.errors;

  if (!errors) return {};
  if (!Array.isArray(errors)) return {};

  const validationErrors: Record<string, string> = {};

  for (const error of errors) {
    if (!error) continue;
    if (typeof error !== "object") continue;

    if (!error.propertyName || typeof error.propertyName !== "string") continue;

    let propertyName: string = error.propertyName;
    propertyName = propertyName[0]
      .toLowerCase()
      .concat(propertyName.substring(1));

    validationErrors[propertyName] =
      convertServerSideErrorToTranslatedErrorMessage(error);
  }

  return validationErrors;
};

const convertServerSideErrorToTranslatedErrorMessage = (
  error: object
): string => {
  const t = i18n.t;
  if (!("errorCode" in error))
    return t("components.form.validationErrors.unexpected", {
      e: "error code null",
    });
  const errorCode = error.errorCode;
  if (
    errorCode == null ||
    typeof errorCode !== "string" ||
    !Object.keys(ErrorCodes).includes(errorCode)
  )
    return t("components.form.validationErrors.unexpected", { e: errorCode });

  const values = FormattedMessagePlaceholderValues.fromError(error);

  switch (errorCode as ErrorCodes) {
    case "MinimumLengthValidator":
      return t("components.form.validationErrors.min", {
        n: values.minLength,
      });
    case "EqualValidator":
      return t("components.form.validationErrors.equal", {
        v: values.comparisonValue,
      });
    case "NotEqualValidator":
      return t("components.form.validationErrors.notEqual", {
        v: values.comparisonValue,
      });
    default:
      return t("components.form.validationErrors.unexpected", { e: errorCode });
  }
};

const createAbortSignal = (): {
  signal: AbortSignal;
  clearAbortSignal: () => void;
} => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    console.error("Request took too long, aborting...");
    controller.abort();
  }, 30000);

  return {
    signal: controller.signal,
    clearAbortSignal: () => clearTimeout(timeout),
  };
};

export type ApiSubmitOptions = {
  path: string;
  init: RequestInit;
};

export type ApiFetchOptions<T> = ApiSubmitOptions & {
  builder: (json: unknown) => Promise<T>;
};

const apiSubmit = async ({ path, init }: ApiSubmitOptions): Promise<void> => {
  if (config.general.IS_LOCAL) {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  }

  const { signal, clearAbortSignal } = createAbortSignal();

  const baseUrl = config.api.API_URL;
  const url = `${baseUrl}/${path}`;

  let response: Response;
  try {
    response = await fetch(url, { ...init, signal, credentials: "include" });
  } catch (error) {
    throw ApiError.fromJson(error);
  } finally {
    clearAbortSignal();
  }

  if (!response.ok) {
    const json = await response.json();
    throw ApiError.fromJson(json);
  }
};

const apiFetch = async <T>({
  path,
  init,
  builder,
}: ApiFetchOptions<T>): Promise<T> => {
  if (config.general.IS_LOCAL) {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  }

  const { signal, clearAbortSignal } = createAbortSignal();

  const baseUrl = config.api.API_URL;
  const url = `${baseUrl}/${path}`;

  let response: Response;
  try {
    response = await fetch(url, { ...init, signal, credentials: "include" });
  } catch (error) {
    throw ApiError.fromJson(error);
  } finally {
    clearAbortSignal();
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch (error) {
    throw ApiError.withStatus(response.status);
  }

  if (!response.ok) {
    throw ApiError.fromJson(json);
  }

  try {
    return await builder(json);
  } catch {
    throw ApiError.UNEXPECTED_FORMAT;
  }
};

const blurActiveElement = () => {
  try {
    (document.activeElement as HTMLElement).blur();
  } catch {
    // do nothing
  }
};

// Exporting all utils together makes them easier to mock
export default {
  extractErrorCode,
  convertServerSideErrorToTranslatedErrorMessage,
  apiSubmit,
  apiFetch,
  blurActiveElement,
  extractValidationErrors,
  extractStatusCode,
};
