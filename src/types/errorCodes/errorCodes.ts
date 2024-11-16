const ErrorCodes = {
  MinimumLengthValidator: "MinimumLengthValidator",
  EqualValidator: "EqualValidator",
  NotEqualValidator: "NotEqualValidator",
} as const;

type ErrorCodes = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export { ErrorCodes };
