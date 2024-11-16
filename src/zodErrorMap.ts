import { z } from "zod";
import i18n from "./localization/i18n";

const t = i18n.t;

const zodCustomErrorMap: z.ZodErrorMap = (issue) => {
  switch (issue.code) {
    case "invalid_type":
      switch (issue.expected) {
        case "number":
          return {
            message: t("components.form.validationErrors.invalid_type.number"),
          };
        case "integer":
          return {
            message: t("components.form.validationErrors..integer"),
          };
        default:
          return { message: JSON.stringify(issue) };
      }
    case "invalid_literal":
      return { message: JSON.stringify(issue) };
    case "unrecognized_keys":
      return { message: JSON.stringify(issue) };
    case "invalid_union":
      return { message: JSON.stringify(issue) };
    case "invalid_union_discriminator":
      return { message: JSON.stringify(issue) };
    case "invalid_enum_value":
      return { message: JSON.stringify(issue) };
    case "invalid_arguments":
      return { message: JSON.stringify(issue) };
    case "invalid_return_type":
      return { message: JSON.stringify(issue) };
    case "invalid_date":
      return { message: JSON.stringify(issue) };
    case "invalid_string":
      switch (issue.validation) {
        case "email":
          return { message: t("components.form.validationErrors.email") };
        default:
          return { message: JSON.stringify(issue) };
      }
    case "too_small":
      return {
        message: t(
          `components.form.validationErrors.too_small.${issue.type}.${issue.inclusive ? "inclusive" : "exclusive"}`,
          {
            n: issue.minimum,
          }
        ),
      };
    case "too_big":
      return {
        message: t(
          `components.form.validationErrors.too_big.${issue.type}.${issue.inclusive ? "inclusive" : "exclusive"}`,
          {
            n: issue.maximum,
          }
        ),
      };
    case "invalid_intersection_types":
      return { message: JSON.stringify(issue) };
    case "not_multiple_of":
      return { message: JSON.stringify(issue) };
    case "not_finite":
      return { message: JSON.stringify(issue) };
    case "custom":
      return { message: JSON.stringify(issue) };
  }
};

export default zodCustomErrorMap;
