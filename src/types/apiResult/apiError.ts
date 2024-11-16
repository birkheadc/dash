import utils from "../../utils";

export class ApiError {
  errorCode?: string;
  status: number = 0;
  validationErrors: Record<string, string> = {};

  constructor(status?: number, errorCode?: string) {
    this.status = status ?? 0;
    this.errorCode = errorCode;
    this.validationErrors = {};
  }

  static fromJson(json: unknown): ApiError {
    if (!json) return ApiError.UNEXPECTED_FORMAT;
    if (typeof json !== "object") return ApiError.UNEXPECTED_FORMAT;

    const statusCode = utils.extractStatusCode(json);
    const errorCode = utils.extractErrorCode(json);
    const validationErrors = utils.extractValidationErrors(json);

    const apiError = new ApiError(statusCode, errorCode);
    apiError.validationErrors = validationErrors;
    return apiError;
  }

  static withStatus(status: number): ApiError {
    return new ApiError(status);
  }

  static UNEXPECTED_FORMAT: ApiError = new ApiError(422);
  static LOGIN_FAILED: ApiError = new ApiError(401, "loginFailed");
}
