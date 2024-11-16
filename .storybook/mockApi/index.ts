import { Api } from "../../src/types/api/api";
import books from "./books";
import auth from "./auth";
import users from "./users";
import example from "./example";

const mockApi: Api = {
  example,
  books,
  auth,
  users
};

export default mockApi;
