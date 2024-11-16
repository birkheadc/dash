export class FormattedMessagePlaceholderValues {
  maxLength: number | undefined = undefined;
  minLength: number | undefined = undefined;
  comparisonValue: string | number | undefined = undefined;

  static fromError(error: object): FormattedMessagePlaceholderValues {
    const values = new FormattedMessagePlaceholderValues();

    if (!("formattedMessagePlaceholderValues" in error)) return values;

    const _values = error.formattedMessagePlaceholderValues;
    if (typeof _values !== "object" || _values == null) return values;

    if ("MaxLength" in _values && typeof _values.MaxLength === "number")
      values.maxLength = _values.MaxLength;
    if ("MinLength" in _values && typeof _values.MinLength === "number")
      values.minLength = _values.MinLength;
    if (
      "ComparisonValue" in _values &&
      (typeof _values.ComparisonValue === "string" ||
        typeof _values.ComparisonValue === "number")
    )
      values.comparisonValue = _values.ComparisonValue;

    return values;
  }
}
