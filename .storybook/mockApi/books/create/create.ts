import { BookFormSchema } from "../../../components/pages/BooksPage/BookForm/BookForm.schema";

const create = async (book: BookFormSchema): Promise<void> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
};

export default create;
