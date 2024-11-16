import { ApiError } from "../apiResult/apiError";

export class Paginated<T> {
  values: T[] = [];
  paginationToken?: string;

  static fromJson<T>(
    json: unknown,
    valueBuilder: (json: unknown) => T,
  ): Paginated<T> {
    if (json == null) throw ApiError.UNEXPECTED_FORMAT;
    if (typeof json !== "object") throw ApiError.UNEXPECTED_FORMAT;
    if (!("values" in json)) throw ApiError.UNEXPECTED_FORMAT;

    const values = json.values;

    if (!Array.isArray(values)) throw ApiError.UNEXPECTED_FORMAT;

    const paginated = new Paginated<T>();

    for (const value of values) {
      paginated.values.push(valueBuilder(value));
    }

    if ("paginationToken" in json && typeof json.paginationToken === "string") {
      paginated.paginationToken = json.paginationToken;
    }

    return paginated;
  }
}
